interface Sizes {
  [key: string]: string;
}

const sizes = {
  up(size: string) {
    const sizes: Sizes = {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    };
    return `@media only screen and (min-width: ${sizes[size]})`;
  },
  down(size: string) {
    const sizes: Sizes = {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    };
    return `@media only screen and (max-width: ${sizes[size]})`;
  },
};

export default sizes;
