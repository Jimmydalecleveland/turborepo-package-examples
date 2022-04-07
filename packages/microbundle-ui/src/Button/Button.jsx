import * as React from 'react'

const Button = ({ children, type = "button" }) => {
  return (
    <button type={type}>
      {children}
    </button>
  )
}

export default Button
