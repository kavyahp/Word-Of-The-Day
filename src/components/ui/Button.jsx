import React from 'react'

function Button({ variant = 'primary', className = '', children, ...props }) {
  const baseClass = 'btn'
  const variantClass = variant === 'primary' ? 'btn-primary' : ''

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

