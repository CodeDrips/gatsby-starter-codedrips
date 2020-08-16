import React from "react"
import Link from '../utils/link'

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section className='error404' data-color='#000'>
    	<div className='error404__inner'>
    		<div className='error404__content'>
			    <h1>404 Error</h1>
			    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			    <Link to='/' className='btn'>Back home</Link>
			  </div>
		  </div>
		</section>
  </>
)

export default NotFoundPage
