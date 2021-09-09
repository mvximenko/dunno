export default function sliceOverview(str: string) {
  if (str.length > 300) {
    const shortString = str.slice(0, str.lastIndexOf('.', 300) + 1);
    if (shortString === '') {
      return `${str.slice(0, str.indexOf(',', 100))}...`;
    }
    return shortString;
  }
  return str;
}
