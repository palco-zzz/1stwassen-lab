const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          plugins: [
            tailwindcss,
            autoprefixer,
          ],
        },
      },
    },
  },
};
