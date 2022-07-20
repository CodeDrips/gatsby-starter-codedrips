require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Site Name`,
    description: `Site Description`,
    author: `@codedrips`,
    siteUrl: `https://${process.env.SITE_URL}/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: false,
        defaultQuality: 100,
        defaults: {
          formats: [`auto`],
          placeholder: `dominantColor`,
          breakpoints: [900],
          quality: 100,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `site long name`,
        short_name: `site shortname`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://${process.env.WP_URL}/graphql`,
        auth: {
          htaccess: {
            username: "demo",
            password: "password",
          }
        },
        schema: {
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
          perPage: 10,
        },
        develop: {
          nodeUpdateInterval: 300 * 1000,
          hardCacheMediaFiles: true,
          //hardCacheData: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://${process.env.SITE_URL}`,
        sitemap: `https://${process.env.SITE_URL}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
