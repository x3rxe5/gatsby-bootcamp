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
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:process.env.SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'src',
        path:`${__dirname}/src/`
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve:"gatsby-transformer-remark",
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:750,
              linkImagesToOriginal:false,
            }
          }
        ]
      }
    }
  ],
}
