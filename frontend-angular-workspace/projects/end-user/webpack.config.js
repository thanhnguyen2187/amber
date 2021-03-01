module.exports = {
  plugins: [
    // new ExtractCssChunks(),
    // new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // from webpack's doc
          // > Loaders are evaluated/executed from right to left
          //   (or from bottom to top)
          // {
          //   loader: ExtractCssChunks.loader,
          //   options: {
          //     hot: true,
          //     reloadAll: true,
          //     cssModules: true
          //   }
          // },
          // MiniCssExtractPlugin.loader,
          // {
          //   loader: 'css-loader',
          //   options: {
          //     importLoaders: 1,
          //     // importLoaders: 2,
          //   }
          // },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                ident: 'postcss',
                syntax: 'postcss-scss',
                plugins: [
                  require('postcss-import'),
                  require('tailwindcss')('./projects/end-user/tailwind.config.full.js'),
                  require('autoprefixer'),
                ],
              },
            },
          },
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     sassOptions: {
          //       implementation: require('sass'),
          //     }
          //   },
          // },
        ],
      },
    ],
  },
};
