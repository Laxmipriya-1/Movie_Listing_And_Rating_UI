// import React from 'react'
// import "./Navbar.css";
// import Fire from "../../assets/fire.png"
// import Star from "../../assets/star.png"
// import Party from "../../assets/partying-face.png"

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <h1>MOVIE L&R</h1>
       
//       <div className="navbar_links">
//         <a href='#popular'>Popular<img src={Fire} alt='fire emoji' className='navbar_emoji'/></a>
//         <a href='#top_rated'>Top Rated<img src={Star} alt='fire emoji' className='navbar_emoji'/></a>
//         <a href='#upcoming'>Upcoming<img src={Party} alt='fire emoji' className='navbar_emoji'/></a>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import "./Navbar.css";
import Fire from "../../assets/fire.png"
import Star from "../../assets/star.png"
import Party from "../../assets/partying-face.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <h1>MOVIE L&R</h1>

      {/* Hamburger */}
      <div 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`navbar_links ${isOpen ? "show" : ""}`}>
        <a href='#popular' onClick={() => setIsOpen(false)}>
          Popular <img src={Fire} alt='fire emoji' className='navbar_emoji'/>
        </a>

        <a href='#top_rated' onClick={() => setIsOpen(false)}>
          Top Rated <img src={Star} alt='star emoji' className='navbar_emoji'/>
        </a>

        <a href='#upcoming' onClick={() => setIsOpen(false)}>
          Upcoming <img src={Party} alt='party emoji' className='navbar_emoji'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;