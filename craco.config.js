const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@/root': resolvePath('./src'),
      '@/api': resolvePath('./src/api'),
      '@/assets': resolvePath('./src/assets'),
      '@/icons': resolvePath('./src/assets/icons'),
      '@/redux': resolvePath('./src/redux'),
      '@/hooks': resolvePath('./src/hooks'),
      '@/utils': resolvePath('./src/utils'),
      '@/types': resolvePath('./src/types'),
    },
  },
};
