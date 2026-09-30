// Site-wide button hover (every .pill, plus anything marked [data-pill-fill]): the label rolls up out of the pill
// while a black pill rolls up from below with a white copy of the label, like the button turning. Styles: global.css.
// This wraps the label in .pill-label and adds the black pill. Buttons with a custom label layout (the flock CTA)
// include the .pill-fill markup themselves and are left as they are.
export function initPillFill(): void {
  document.querySelectorAll<HTMLElement>('.pill, [data-pill-fill]').forEach((el) => {
    if (el.querySelector('.pill-fill')) return;
    const label = el.textContent?.trim() ?? '';
    const wrap = document.createElement('span');
    wrap.className = 'pill-label';
    wrap.textContent = label;
    const fill = document.createElement('span');
    fill.className = 'pill-fill';
    fill.setAttribute('aria-hidden', 'true');
    const pill = document.createElement('span');
    pill.className = 'pill-fill__pill';
    const text = document.createElement('span');
    text.className = 'pill-fill__text';
    text.textContent = label;
    pill.append(text);
    fill.append(pill);
    el.replaceChildren(wrap, fill);
  });
}
