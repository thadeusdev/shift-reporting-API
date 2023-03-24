import React, { useEffect, useState } from 'react';
import './Crac.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Crac = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(cracs);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [cracs, setCracs] = useState([])

  useEffect(() => {
    fetch('/cracs')
    .then(res => res.json())
    .then(cracs => setCracs(cracs))
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
          <label htmlFor="">name:</label>
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
              <th>name</th>
              <th>status</th>
              <th>note</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {cracs.map((crac)=>(
            <tr key={crac.id}>
              <td>{crac.formatted_time}</td>
              <td>{crac.date}</td>
              <td>{crac.team_name}</td>
              <td>{crac.shift}</td>
              <td>{crac.name}</td>
              <td>{crac.status}</td>
              <td>{crac.note}</td>
              <td>
                <Link to="/cracs/:id">
                <button>
                  <div  className='edit-crac'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
                <button>
                  <div className='delete-crac'>
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

export default Crac