import React, {useState} from 'react'
import './Sidebar.scss'
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = ()=> setIsOpen(!isOpen);
  return (
    <div className='sidebar' style={{width: isOpen ? "155px" : "50px"}}>
        <div className="container">
            <div className="top">
                <div className="menu" style={{marginLeft: isOpen ? "50px" : "10px"}}>
                    <AiOutlineMenu className='icon' onClick={toggle}/>
                </div>
            </div>
            <div className="bottom" style={{visibility: isOpen ? "visible" : "hidden"}}>
                <div className="user">
                    <img src="/img/hero.jpg" alt="" />
                    <span>Thadeus</span>
                </div>
                <div className="dashboard">
                    <Link className='Link' to="/dashboard">
                    <AiOutlineHome className='icon'/>
                    <h4>Dashboard</h4>
                    </Link>
                </div>
                <div className="side-menu">
                    <h4>data</h4>
                    <div className="items">
                        <Link className='Link' to="/members">
                        <span>team</span>
                        </Link>
                        <Link className='Link' to="/generators">
                        <span>generator</span>
                        </Link>
                        <Link className='Link' to="/ups">
                        <span>UPS</span>
                        </Link>
                        <Link className='Link' to="/room_temperature">
                        <span>room temp.</span>
                        </Link>
                        <Link className='Link' to="/cracs">
                        <span>CRACS</span>
                        </Link>
                        <Link className='Link' to="/split_units">
                        <span>SRC Units</span>
                        </Link>
                    </div>
                </div>
                <div className="side-menu">
                    <h4>other</h4>
                    <div className="items">
                        <Link className='Link' to="/alarms">
                        <span>alarms</span>
                        </Link>
                        <Link className='Link' to="/status">
                        <span>equip. status</span>
                        </Link>
                        <Link className='Link' to="/cleanliness">
                        <span>cleanliness</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar