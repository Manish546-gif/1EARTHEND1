# TODO: Apply usePageTransition Hook Pattern to Landing Pages and Specified Pages

## Pending Tasks
- [x] Edit HomeLanding.jsx: Remove framer-motion; import gsap, usePageTransition, useEffect; add useEffect with await waitForCurtainOpen; create GSAP timeline for leftText (stagger), heading (stagger), rightText (stagger).
- [x] Edit AboutLanding.jsx: Similar conversion for heading and paragraphLines (desktop and mobile).
- [x] Edit ServiceLanding.jsx: Similar for heading and paragraphLines.
- [x] Edit SoloHome.jsx: Convert title and location to GSAP.
- [x] Edit ProjectsSection.jsx: Convert all motion elements: top bar (h2, p), center project (div, img, h1, p), bottom controls (buttons, progress bar), coming soon overlay.
- [x] Edit Projectsolo.jsx: Add usePageTransition and useEffect with await waitForCurtainOpen (no animations, just to follow pattern).

## Followup Steps
- [x] Test animations to ensure they start only after curtains open.
- [ ] Verify no GSAP conflicts with existing usage.
- [ ] Check mobile/desktop layouts.
