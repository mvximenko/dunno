export function titleCase(str: string) {
  return str.replace(/_/g, ' ').replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}

export function sliceOverview(str: string) {
  if (str.length > 440) return str.slice(0, str.lastIndexOf('.', 440) + 1);
  return str;
}
