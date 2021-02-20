import React from 'react'
import PropTypes from 'prop-types'
import { Counter } from './counter'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
        <>
          <span className="footerCopyrights">
            <Counter />
          © 2019 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
          <span className="footerCopyrights">
            Starter created by <a href="https://radoslawkoziel.pl">panr</a>
          </span>
        </>
      )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
