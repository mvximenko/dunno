export function titleCase(str: string) {
  return str.replace(/_/g, ' ').replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}

export function sliceOverview(str: string) {
  if (str.length > 300) return str.slice(0, str.lastIndexOf('.', 300) + 1);
  return str;
}
