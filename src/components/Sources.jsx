import React from 'react'
import '../Styles/Sources.css'
import PropTypes from 'prop-types'

export default function Sources({ companies = [], bgImage = [] }) {
  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${bgImage.image})` }}>
        <h1 className="tittleSources">As see in:</h1>
        <img className="companies" src={companies.image} alt="None" />
      </div>
      <h1 className="tittleTestimonio">Here is what our alumni say about freeCodeCamp:</h1>
    </div>

  )
}

Sources.propTypes = {
  companies: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
  bgImage: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
}
