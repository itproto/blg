const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

module.exports = {
  siteMetadata: {
    title: `blog itproto`,
    description: `ghatsby and blogging`,
    copyrights: '',
    author: `@oleks`,
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'itproto.com',
    defaultTheme: 'dark',
    postsPerPage: 5,
    showMenuItems: 2,
    menuMoreText: 'Show more',
    mainMenu: [
      {
        title: 'About',
        path: '/about',
      },
      {
        title: 'Showcase',
        path: '/showcase',
      },
      {
        title: 'Example',
        path: '/example',
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },

        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-hello-friend`,
        short_name: `hello-friend`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/images/hello-icon.png`,
      },

    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embedded-codesandbox',
            options: {
              // Required:

              // Example code folders are relative to this dir.
              // eg src/_examples/some-example-folder
              directory: `${__dirname}/src/examples/`,

              // Optional:

              // Custom protocol for parsing the embedding link
              // default:
              protocol: 'embedded-codesandbox://',

              // Customise CodeSandbox embedding options:
              // https://codesandbox.io/docs/embedding#embed-options
              // default:
              embedOptions: {
                editorsize: 100,
                hidenavigation: 1,
                view: 'editor',
              },

              // Customise the embedding iframe given the generated url
              // default:
              getIframe: url => `<iframe src="${url}" class="embedded-codesandbox" 
              style="width:100%;height:15rem"
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`,
            },

          },
        ],
      },
    },
  ],
}
