module.exports = {
  siteMetadata: {
    title: `Brandon and Alissa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`, `Lato`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-114819795-1",
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      }
    }
  ],
}