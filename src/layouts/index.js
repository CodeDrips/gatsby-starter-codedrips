import React from 'react'
import PropTypes from 'prop-types'

import layoutQuery from "../hooks/use-layout-query"

import '../assets/scss/main.scss'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, location, pageContext }) => {
  const data = layoutQuery()

  return (
    <>
      <Header location={location} data={data} pageContext={pageContext} />
      <main>{ children }</main>
      <Footer data={data} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
