import React, {useState} from 'react'
import './Topbar.scss'
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import axios from 'axios'

const Topbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value.length > 2) {
      axios
        .get(`?q=${event.target.value}`)
        .then((response) => setResults(response.data))
        .catch((error) => console.error(error));
    } else {
      setResults([]);
    }
  };

  return (
    <div className='topbar'>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="/img/logo.png" alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder='Search...' value={query} onChange={handleChange} results={results} />
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