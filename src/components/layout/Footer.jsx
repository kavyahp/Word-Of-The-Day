import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} Word of the Day.</span>
        <span>Built for focused, daily vocabulary practice.</span>
      </div>
    </footer>
  )
}

export default Footer

