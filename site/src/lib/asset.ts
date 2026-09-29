// Prefix a public/ path with the site's base path (e.g. "/hamsa_os/" on GitHub Pages, "/" elsewhere).
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
