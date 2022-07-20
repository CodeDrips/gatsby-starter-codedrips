import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, ...props }) => {

  const href = to?.replace(process.env.GATSBY_PREVIEW_URL, '') || ''

  const offsite = ['//', 'mailto:', 'tel:', 'sms:'].findIndex(el => href.indexOf(el) !== -1)

  if (offsite === -1) {
    return <GatsbyLink to={href} {...props}>{ children }</GatsbyLink>
  }

  return (
    <a {...props} href={href} target='_blank' rel='nofollow noopener noreferrer'>
      { children }
    </a>
  )
}

export default Link
