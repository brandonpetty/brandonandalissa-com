import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../fonts/fonts.scss'
import './index.scss'

const Header = () => (
  <header>
    <nav>

    </nav>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Brandon & Alissa"
      meta={[
        { name: 'Brandon & Alissa', content: 'Brandon and Alissa are getting married on May 5, 2018' }
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
