import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer className='footer'>
        <p>{length} List {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer