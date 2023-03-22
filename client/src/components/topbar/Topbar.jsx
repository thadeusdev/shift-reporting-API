import React from 'react'
import './Topbar.scss'
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="/img/logo.png" alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder='Search' />
            <AiOutlineSearch className='icon' />
          </div>
        </div>
        <div className="right">
          <button className="logout">
            <AiOutlineLogout className='icon'/>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar