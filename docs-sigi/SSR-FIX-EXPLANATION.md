# SSR Fix for React Three Fiber Components + Lockfile Cleanup

## Problem 1: SSR with R3F
The project was failing to launch due to React Three Fiber (R3F) components being rendered during server-side rendering (SSR) and client-side hydration issues. R3F relies on browser-only APIs (like `window`, `document`, and WebGL), which aren't available in a Node.js environment.

The error in the logs:
```
TypeError: Cannot read properties of undefined (reading 'ReactCurrentOwner')
```

## Problem 2: Multiple Lockfiles Warning
Next.js was showing a warning about multiple lockfiles:
```
Detected additional lockfiles: 
    * E:\Year 2026\Codding\sigi_the_fire_experience\sigi-web\package-lock.json
```
This was caused by a stray `package-lock.json` file in the parent directory without a corresponding `package.json`.

## Root Cause
1. In `src/app/page.tsx`, the `Hero` and `BottleExplosion` components needed proper client-only handling
2. R3F components were trying to initialize before the browser was fully ready

## Solution 1: Add `ssr: false` to Dynamic Imports
Added `ssr: false` to both dynamic imports in `src/app/page.tsx`:

```typescript
const Hero = dynamic(() => import("@/components/hero").then(mod => ({ default: mod.Hero })), {
  ssr: false,
  loading: () => <div className="w-full h-screen flex items-center justify-center">Loading Hero...</div>
});

const BottleExplosion = dynamic(() => import("@/components/bottle-explosion").then(mod => ({ default: mod.BottleExplosion })), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] flex items-center justify-center">Loading Explosion...</div>
});
```

## Solution 2: Create a ClientOnly Component and Wrap R3F
Created `src/components/client-only.tsx` to ensure components only render after mount:
```tsx
"use client";

import { useEffect, useState } from "react";

export function ClientOnly({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return <>{children}</>;
}
```

Wrapped the Canvas components in both `bottle-3d.tsx` and `bottle-explosion.tsx` with ClientOnly.

## Solution 3: Delete Stray Lockfile
Deleted the stray `package-lock.json` file in the parent directory that didn't have a corresponding `package.json`.

## What These Fixes Do
- `ssr: false`: Disables server-side rendering for these components
- `ClientOnly`: Ensures R3F only initializes after the component has mounted in the browser
- Together they prevent R3F from trying to access browser APIs or React context before it's available

## Files Modified/Added
1. Added: `src/components/client-only.tsx` - ClientOnly utility component
2. Modified: `src/components/bottle-3d.tsx` - Wrapped Canvas in ClientOnly
3. Modified: `src/components/bottle-explosion.tsx` - Wrapped Canvas in ClientOnly
4. Modified: `src/app/page.tsx` - Added `ssr: false` to dynamic imports
5. Deleted: `../package-lock.json` - Stray lockfile

## Result
- Next.js dev server now runs successfully on http://localhost:3000
- 3D components render properly in the browser
- No more SSR errors from R3F
- No more multiple lockfiles warning!
