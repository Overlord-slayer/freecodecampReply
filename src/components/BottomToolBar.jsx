import React from 'react'
import '../Styles/BottomToolBar.css'
import { Link } from '@mui/material'
import PropTypes from 'prop-types'

export default function BottomToolBar({ group = [], company = [] }) {
  return (
    <div>
      <div className="UpperText">
        <div className="Titles">
          <h1>Learn to code - for free.</h1>
          <h1>Build projects.</h1>
          <h1>Earn certifications</h1>
          <div className="Paragraph">
            <p>
              <strong>
                Since 2014, mora than 40,000 freeCodeCamp.org graduates have gotten
                {' '}
                <br />
                jobs at tech companies including.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="companyContainer">
        <figure className="companyImage">
          <img src={company.image} alt="companies" />
        </figure>
      </div>

      <Link
        sx={{ textDecoration: 'none' }}
        href="https://auth.freecodecamp.org/login?state=
        hKFo2SBzdW9UcGdaRlpGbGFlZW9UVjJCNjRFQWl2el81RjJF
        QaFupWxvZ2luo3RpZNkgRUIxelQzVUhXOFNYanZoSGdkZHBD
        X19KNElqR2pXcHKjY2lk2SBhVUR2OWpWcVRmeEJSRTFsNjBO
        QTVBZjd5VENHRTRjeQ&client=aUDv9jVqTfxBRE1l60NA5A
        f7yTCGE4cy&protocol=oauth2&response_type=code&re
        direct_uri=https%3A%2F%2Fapi.freecodecamp.org%2F
        auth%2Fauth0%2Fcallback&scope=openid%20profile%2
        0email"
      >
        <button className="Start-freeButton" type="button">Get Started (it&apos;s free)</button>
      </Link>
      <figure className="picture">
        <img src={group.image} alt="Korea Group" />
        <figcaption><strong>freeCodeCamp students at a local study group in South Korea.</strong></figcaption>
      </figure>

    </div>
  )
}

BottomToolBar.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
  company: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
}
