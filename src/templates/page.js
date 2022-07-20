import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'

import RenderBlock from '../utils/render-block'

class PageTemplate extends Component {

  render() {
    const { wpPage } = this.props.data

    return (
      <>
        <Seo bodyClass={`page-template page-template--${wpPage.slug}`} {...wpPage.seo} />
        { wpPage.acf?.contentBlocks?.map((el, i) => RenderBlock(el.fieldGroupName?.replace('page_Acf_ContentBlocks_', ''), el, i))  }
      </>
    )
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: {eq: $id}) {
      title
      slug
      uri
      seo {
        ...WpSeo
      }
    }
  }
`

export default PageTemplate