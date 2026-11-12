# Performance work — 2026-11-12

## Local resource comparison

Fresh Chromium contexts, localhost HTTP, 1440×900 at DPR 1 and 390×900 at DPR 2. Resource encodedBodySize summed eight seconds after DOMContentLoaded, without scrolling. One sample each; this is a resource-payload observation, not an internet speed or real-device FPS benchmark. Browser lazy-loading and media buffering affect this total.

| Scenario | Before asset optimisation | After | Reduction |
|---|---:|---:|---:|
| 1440px viewport | 9.04 MB | 4.52 MB | 50.0% |
| 390px viewport | 5.82 MB | 2.11 MB | 63.7% |

## Implemented

- Responsive product photos: 160px showroom thumbnails, 480px/768px card candidates, original 1536px images retained for large views. Detail dialogs request larger image sizes.
- Navigation logo: 225,138 → 21,266 bytes, 420px wide.
- Desktop hero video: 3,867,849 → 2,512,615 bytes (35.0% smaller). Mobile video: 1,479,279 → 1,244,892 bytes (15.8% smaller). Same duration, dimensions and frame rate; H.264 with fast-start metadata.
- Four wood/floor textures: 1,932,876 → 260,682 bytes (86.5% smaller), using the existing 1024px variants.
- 3D bundle requested near the showroom, with the scene built near visibility. Hidden fallback photo lazy-loaded.
- Earlier performance pass: on-demand rendering (zero idle/offscreen frames in checks), smaller shadow maps, capped canvas pixel density, native scrolling and fewer parallax effects. Unveil open/close checked.

## Verification and limits

- Build, JavaScript syntax and diff checks passed.
- Both local initial-load runs had no browser errors or broken loaded images.
- Local LCP readings varied; these runs do not establish a load-time improvement. Resource size is the reliable comparison reported here.
- Existing Vercel configuration already defines asset cache headers. No hosting change or deployment was made. Confirm headers against the actual deployment after release.
- Physical-device scrolling, GPU performance, throttled-network metrics and deployed Core Web Vitals still need measurement on the target devices/site.
