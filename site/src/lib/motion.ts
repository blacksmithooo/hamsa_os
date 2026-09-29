// The Murmuration curve (brand/motion.md) for JavaScript-driven animation, e.g. scroll-scrubbed
// sequences. Same curve as --ease-hamsa in global.css, sampled at 101 points.
const TABLE = [0.0, 6e-05, 0.00042, 0.00126, 0.00276, 0.00502, 0.00816, 0.01225, 0.01735, 0.02351, 0.03076, 0.03912, 0.0486, 0.05921, 0.07092, 0.08373, 0.09761, 0.11253, 0.12844, 0.14531, 0.16309, 0.18173, 0.20117, 0.22136, 0.24224, 0.26374, 0.2858, 0.30836, 0.33134, 0.35469, 0.37834, 0.40221, 0.42625, 0.45039, 0.47457, 0.49871, 0.52277, 0.54668, 0.57038, 0.59381, 0.61693, 0.63968, 0.66201, 0.68387, 0.70523, 0.72603, 0.74625, 0.76585, 0.7848, 0.80306, 0.82061, 0.83744, 0.85351, 0.86882, 0.88336, 0.89711, 0.91006, 0.92223, 0.93359, 0.94417, 0.95396, 0.96298, 0.97123, 0.97873, 0.98551, 0.99157, 0.99695, 1.00166, 1.00574, 1.00921, 1.0121, 1.01445, 1.0163, 1.01766, 1.01859, 1.01912, 1.01929, 1.01914, 1.0187, 1.01801, 1.01712, 1.01605, 1.01485, 1.01356, 1.0122, 1.01081, 1.00942, 1.00807, 1.00677, 1.00555, 1.00442, 1.00342, 1.00254, 1.0018, 1.00119, 1.00073, 1.00039, 1.00017, 1.00005, 1.00001, 1.0];

/** Hamsa easing: 0 → 1 with a short gather, a decisive sweep and a 2% settle. */
export function hamsaEase(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  const x = t * 100;
  const i = Math.floor(x);
  return TABLE[i] + (TABLE[i + 1] - TABLE[i]) * (x - i);
}

/** Mirror of hamsaEase for things leaving: a small wind-up, then away. */
export const hamsaEaseExit = (t: number): number => 1 - hamsaEase(1 - t);
