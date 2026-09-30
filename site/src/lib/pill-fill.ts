// Site-wide button hover (every .pill, plus anything marked [data-pill-fill]): the label rolls up out of the pill
// while a black pill rolls up from below with a white copy of the label, like the button turning. Styles: global.css.
// This keeps the label as an invisible spacer and adds a mask holding the black label and the black pill. Buttons with a custom label layout (the flock CTA)
// include the .pill-fill markup themselves and are left as they are.
export function initPillFill(): void {
  document.querySelectorAll<HTMLElement>('.pill, [data-pill-fill]').forEach((el) => {
    if (el.querySelector('.pill-fill')) return;
    const text = el.textContent?.trim() ?? '';
    const span = (cls: string, content = '') => {
      const s = document.createElement('span');
      s.className = cls;
      s.textContent = content;
      return s;
    };
    const spacer = span('pill-spacer', text); // keeps the width
    const fill = span('pill-fill');
    fill.setAttribute('aria-hidden', 'true');
    const pill = span('pill-fill__pill');
    pill.append(span('pill-fill__text', text));
    fill.append(span('pill-label', text), pill);
    el.replaceChildren(spacer, fill);
  });
}
