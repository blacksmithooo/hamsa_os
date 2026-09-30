// Site-wide button hover (every .pill, plus anything marked [data-pill-fill]): a black pill slides in from the left
// inside the button's own pill-shaped mask and back out on roll-off. It carries a white copy of the label that
// counter-moves so it stays put, so the text turns white exactly where the black has reached. Styles: global.css.
// Buttons with a custom label layout can include the .pill-fill markup themselves; they're left as they are.
export function initPillFill(): void {
  document.querySelectorAll<HTMLElement>('.pill, [data-pill-fill]').forEach((el) => {
    if (el.querySelector('.pill-fill')) return;
    const fill = document.createElement('span');
    fill.className = 'pill-fill';
    fill.setAttribute('aria-hidden', 'true');
    const pill = document.createElement('span');
    pill.className = 'pill-fill__pill';
    const text = document.createElement('span');
    text.className = 'pill-fill__text';
    text.textContent = el.textContent?.trim() ?? '';
    pill.append(text);
    fill.append(pill);
    el.append(fill);
  });
}
