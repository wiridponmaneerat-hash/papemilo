// Resolves a root-relative public asset path against Vite's configured base
// (e.g. '/papemilo/' in production, '/' in local dev), so hardcoded paths
// like '/videos/x.mp4' work both locally and when deployed under a GitHub
// Pages project subpath.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
