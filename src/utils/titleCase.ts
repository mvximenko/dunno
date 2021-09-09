export default function titleCase(str: string) {
  return str.replace(/_/g, ' ').replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}
