/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { IMAGE_PROCESSING } = require("gatsby-plugin-sharp/gatsby-worker");

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 800,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
  ],
  siteMetadata: {
    title: "Testing Gatsby",
    description: "My Portfolio Website",
    copyright:
      "This website is copyright 2022 Testing Gatsby / Carlos Garavito",
    contact: "cg9822@gmail.com",
  },
}
