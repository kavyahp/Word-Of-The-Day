import React from 'react'

function Card({ className = '', children }) {
  const baseClass = 'card card-hover'

  return <div className={`${baseClass} ${className}`.trim()}>{children}</div>
}

export default Card

