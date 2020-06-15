interface Sizes {
  [key: string]: string;
}
export default {
  up(size: string) {
    const sizes: Sizes = {
      xs: '480px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1600px',
    };
    return `@media only screen and (min-width: ${sizes[size]})`;
  },
  down(size: string) {
    const sizes: Sizes = {
      xs: '480px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1600px',
    };
    return `@media only screen and (max-width: ${sizes[size]})`;
  },
};