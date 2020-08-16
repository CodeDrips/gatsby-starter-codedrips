import React, { Component } from 'react'
import Link from '../utils/link'

class Header extends Component {

  state = {
    offCanvas: false
  }

  _hideOffCanvas = () => {
    this.setState({ offCanvas: false })
  }

  _toggleOffCanvas = () => {
    this.setState({ offCanvas: !this.state.offCanvas })
  }

  render() {

    let { offCanvas } = this.state

    let props = {
      onClick: this._hideOffCanvas,
      activeClassName: 'active'
    }

    return (
      <>
        <header className='header'>
          <div className='header__inner'>
            <Link to='/' title='Site Name' className='header__logo' {...props}>
              Site Name
            </Link>
            <nav className='header__nav'>
              <ul>
                <li><Link to='/' {...props}>Home</Link></li>
              </ul>
            </nav>
            <button onClick={this._toggleOffCanvas} className={ offCanvas ? 'header__hamburger active' : 'header__hamburger' }>
              <span className='lines'></span>
            </button>
          </div>
        </header>
        <div className={`off-canvas ${ offCanvas && 'off-canvas--active' }`}>
          <div className='off-canvas__inner'>
            <nav className='off-canvas__nav'>
              <ul>
                <li><Link to='/' {...props}>Home</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    )
  }
}

export default Header
