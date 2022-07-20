import React from 'react'

import Video from '../components/video'

const renderBlock = (param, el, i) => {
  el.key = i

  let block = {
    'Video' : (el) => <Video {...el} />,
  }[param]

  if (!block) return null

  return block(el)
}

export default renderBlock