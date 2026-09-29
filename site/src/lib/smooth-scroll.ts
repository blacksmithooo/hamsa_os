// Weighted, slightly "dragging" scroll (same setup as blacksmith.ooo): Lenis with lerp 0.1, meaning each frame the
// page covers 10% of the remaining distance. Wheel and trackpad only; touch scrolling stays native.
// Skipped entirely when someone prefers reduced motion. Exposed as window.lenis so other scripts can pause it.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function startSmoothScroll(): void {
  if (window.lenis || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  window.lenis = lenis;
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}
