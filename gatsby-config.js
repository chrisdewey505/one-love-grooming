module.exports = {
    siteMetadata: {
      title: "One Love Mobile Grooming",
      description: "Cutting-edge mobile pet grooming in Huntington Beach",
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
          fonts: [`Inter:400,700`, `Playfair Display:400,700`],
          display: 'swap',
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
    ],
  };