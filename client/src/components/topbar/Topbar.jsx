import React, {useState, useEffect} from 'react'
import './Topbar.scss'
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import Alarms from '../../pages/alarms/Alarms';

const Topbar = () => {
  const [alarms, setAlarms] = useState([]);
  const [cleans, setCleans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('/alarms')
    .then(res => res.json())
    .then(alarms => setAlarms(alarms))
    fetch('/cleans')
    .then(res => res.json())
    .then(cleans => setCleans(cleans))
  },[]);

  useEffect(() => {
    const alarmResults = alarms.filter(alarm => alarm.category.toLowerCase().includes(searchTerm.toLowerCase()));
    const cleanResults = cleans.filter(clean => clean.room.toLowerCase().includes(searchTerm.toLowerCase()));

    const results = [...alarmResults, ...cleanResults];
    setSearchResults(results);
  }, [alarms, cleans]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='topbar'>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="/img/thadeus-high-resolution-logo-black-on-transparent-background.png" alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder='Search...' onChange={handleSearchChange} />
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