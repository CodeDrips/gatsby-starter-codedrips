import React, { Component } from 'react'
import { graphql } from 'gatsby'
import he from 'he'

import SEO from '../components/seo'
import Plyr from '../components/plyr'

class IndexPage extends Component {

  render() {
    return (
      <>
        <h1>Index</h1>
        <Plyr
          type='youtube'
          ref='player'
          videoId={ 'xzpndHtdl9A' }
          autoplay={ false }
          urls={{
            youtube: {
              api: 'https://noembed.com/embed?url={0}'
            }
          }}
        />
      </>
    )
  }
}

export default IndexPage
