module.exports = {
  siteMetadata: {
    siteUrl: "https://www.danmeuse.com",
    title: "dan-portolio-gatsby-themed",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Meuse Portfolio`,
        short_name: `Meuse Portfolio`,
        start_url: `Dan Meuse || `,
        background_color: `#0f2027`,
        icon: `src/images/dog.ico`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
};
