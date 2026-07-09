(() => {
  const parts = globalThis.location.pathname.split("/").filter(Boolean);
  const base = parts.length > 1 ? `/${encodeURIComponent(parts[0])}/` : "/";
  const homeLink = document.getElementById("homeLink");
  if (homeLink) homeLink.href = base;
  globalThis.setTimeout(() => globalThis.location.replace(base), 250);
})();
