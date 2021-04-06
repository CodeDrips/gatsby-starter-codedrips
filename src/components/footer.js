import React, { Component } from 'react'
import Link from '../utils/link'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__inner'>
          <Link to='/' title='Site Name' className='footer__logo'>
            Site Name
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
