import React from 'react'

const PokeType = ({ type }) => {
  return (
    <div className={`type type-${type}`}>{type}</div>
  )
}

export default PokeType