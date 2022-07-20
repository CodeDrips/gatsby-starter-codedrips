import { useStaticQuery, graphql } from "gatsby"

const useLayoutQuery = () => {
  return useStaticQuery(graphql`
    fragment WpSeo on WpPostTypeSEO {
      metaDesc
      metaKeywords
      metaRobotsNofollow
      opengraphAuthor
      opengraphDescription
      opengraphImage {
        localFile {
          publicURL
        }
      }
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      schema {
        articleType
        pageType
        raw
      }
      title
      twitterDescription
      twitterImage {
        localFile {
          publicURL
        }
      }
      twitterTitle
    }
    fragment ArticleCard on WpPost {
      id
      uri
      title
      content
      excerpt
      date(formatString: "ddd DD MMMM")
    }
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)
}

export default useLayoutQuery