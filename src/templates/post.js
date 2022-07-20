import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'

class PostTemplate extends Component {

  render() {
    const { wpPost } = this.props.data

    return (
      <>
        <Seo bodyClass='post-template' {...wpPost.seo} />
        <article>
          <h1>{ wpPost.title }</h1>
        </article>
      </>
    )
  }
}

export const postQuery = graphql`
  query ($id: String!) {
    wpPost(id: {eq: $id}) {
      title
      content
      uri
      seo {
        ...WpSeo
      }
      date(formatString: "MMMM D, YYYY")
    }
  }
`

export default PostTemplate