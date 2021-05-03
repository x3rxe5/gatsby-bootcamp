/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"Gatsby Blog",
    author:"Pulkit Sharma",
    description:"A first blog in GatsbyJS",
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'src',
        path:`${__dirname}/src/`
      },
    },
    'gatsby-transformer-remark',
  ],
}
