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
              require('tailwindcss')('./projects/end-user/tailwind.config.js'),
              require('autoprefixer'),
            ],
          },
        },
      },
    ],
  },
};
