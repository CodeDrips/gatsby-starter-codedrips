import React from 'react'

const Default = () => (<div />)

const renderBlock = (param, el, i, page={}) => {
  let block = {
    'WordPressAcf_default' : (el, i) => <Default key={i} {...el} />,
  }[param]

  if (!block) return

  return block(el, i)
}

export default renderBlock
