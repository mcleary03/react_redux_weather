import React from 'react'
import './styles.css'

const Button = props => {
  const { children, type } = props

  return (
    <button className='Button' type={ type }>{ children }</button>
  )
}

export default Button