import PropTypes from 'prop-types'
import React from 'react'
import '../Styles/Testimonio.css'

export default function Testimonio({
  img = [], alternative, nombre, pais, cargo, empresa, testimonio,
}) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={img.image}
        alt={alternative}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong>
          {' '}
          in
          {' '}
          {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo}
          {' '}
          at
          {' '}
          <strong>{empresa}</strong>
          {' '}
        </p>
        <p className="texto-testimonio">
          &ldquo;
          {testimonio}
          &rdquo;
        </p>
      </div>
    </div>
  )
}

Testimonio.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
  alternative: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
}
