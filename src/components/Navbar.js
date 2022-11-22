import React from 'react';
import '../Styles/Navbar.css'
import logo_img1 from '../Assets/Images/logo1.png'
import logo_img2 from '../Assets/Images/logo2.png'
import user_img from '../Assets/Images/user.png'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav_bar'>
          <li className='nav_items'>
              <div className="logo">
                  <img src={logo_img1} alt="Loading" />
                  <img src={logo_img2} alt="Loading" />
              </div>
          </li>
          <li className='nav_items' id='items'>
              <div className="items_box">Twitter Live</div>
          </li>
          <li className='nav_items' id='user_nav'>
            <div className="user_box">
                <img src={user_img} alt="Loading image" />
                <div className="user_name">BSC Mainnet</div>
            </div>
            <button className='nav_btn'>Connect</button>
          </li>
      </ul>
    </nav>
    
  )
}

export default Navbar;
