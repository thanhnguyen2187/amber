module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss')('./projects/administration/tailwind.config.js'),
              require('autoprefixer'),
            ],
          },
        },
      },
    ],
  },
};
