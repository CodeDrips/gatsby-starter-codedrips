import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({
  children,
  title,
  metaDesc,
  metaKeywords,
  meta,
  lang,
  opengraphImage,
  opengraphUrl,
  schema,
  bodyClass,
}) {
  const { site, wp } = useStaticQuery(query)

  const metaDescription = metaDesc || site.siteMetadata.description
  const path = opengraphUrl?.replace(process.env.GATSBY_PREVIEW_URL, '') || ''
  const url = `${site.siteMetadata.siteUrl}${path}`

  const image = opengraphImage?.localFile?.publicURL || wp.seo.schema?.logo?.sourceUrl

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          content: `width=device-width, initial-scale=1, maximum-scale=1`,
          name: `viewport`,
        },
        {
          content: metaKeywords,
          name: `keywords`,
        },
        {
          content: site.siteMetadata.author,
          name: `author`,
        },
        {
          content: image,
          name: `image`,
        },
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: site.siteMetadata.title,
          name: "application-name",
        },
        // Schema.org for Google
        {
          content: site.siteMetadata.title,
          itemprop: "name",
        },
        {
          content: metaDescription,
          itemprop: "description",
        },
        // Open Graph
        {
          content: url,
          property: `og:url`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: image ? image : wp.seo.schema?.logo?.sourceUrl,
          property: `og:image`,
        },
        {
          href: url,
          name: "canonical",
        },
        {
          href: url,
          hreflang: "en",
          name: "alternate",
        },
        {
          href: url,
          hreflang: "x-default",
          name: "alternate",
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{`${schema?.raw}`}</script>
      <body className={bodyClass} />
      {children}
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
}

Seo.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string,
  bodyClass: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    wp {
      seo {
        schema {
          logo {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export default Seo
