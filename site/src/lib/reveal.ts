// Shared scroll reveal for sections whose Figma frames show a "before" and "after" state.
// Elements with [data-reveal] get `is-armed` (the "before" state) once JS runs, so visitors
// without JS see the finished state, then `is-revealed` once enough of them is on screen.
export function observeReveal(selector = '[data-reveal]', threshold = 0.45): void {
  document.querySelectorAll<HTMLElement>(`${selector}:not(.is-armed)`).forEach((el) => {
    el.classList.add('is-armed');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          io.disconnect();
        }
      },
      { threshold: Number(el.dataset.revealThreshold ?? threshold) },
    );
    io.observe(el);
  });
}
