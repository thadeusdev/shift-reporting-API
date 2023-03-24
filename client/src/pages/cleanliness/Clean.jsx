import React, { useEffect, useState } from 'react';
import './Clean.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Clean = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(cleanliness);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [cleanliness, setCleanliness] = useState([])

  useEffect(() => {
    fetch('/cleans')
    .then(res => res.json())
    .then(cleanliness => setCleanliness(cleanliness))
  }, [])

  return (
    <div className='table'>
            <form>
        <div className="input-item">
          <label htmlFor="">time:</label>
          <input type="time" />
        </div>
        <div className="input-item">
          <label htmlFor="">date:</label>
          <input type="date" />
        </div>
        <div className="input-item">
          <label htmlFor="">team:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">shift:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">room:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">status:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">note:</label>
          <input type="text" />
        </div>        
        <button>submit</button>
      </form>
      <hr />
      <div className='table-container'> 
      <button onClick={exportToExcel}>Download</button>      
        <table>
          <thead>
            <tr>
              <th>time</th>
              <th>date</th>
              <th>team member</th>
              <th>shift</th>
              <th>room</th>
              <th>status</th>
              <th>note</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {cleanliness.map((clean)=>(
            <tr key={clean.id}>
              <td>{clean.formatted_time}</td>
              <td>{clean.date}</td>
              <td>{clean.team_name}</td>
              <td>{clean.shift}</td>
              <td>{clean.room}</td>
              <td>{clean.status}</td>
              <td>{clean.note}</td>
              <td>
                <Link to="/cleanliness/:id">
                <button>
                  <div  className='edit-clean'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
                <button>
                  <div className='delete-clean'>
                  <AiFillDelete style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>      
      </div>
    </div>
  )
}

export default Clean