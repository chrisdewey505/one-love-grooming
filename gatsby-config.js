module.exports = {
    siteMetadata: {
      title: "One Love Grooming",
      description: "Luxury mobile pet grooming in Huntington Beach",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Roboto:400,700`,
            `Playfair Display:400,700`,
          ],
          display: 'swap',
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
  };