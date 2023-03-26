import React, { useEffect, useState } from 'react';
import './Generator.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Generator = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(generators);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [generators, setGenerators] = useState([])

  useEffect(() => {
    fetch('/generators')
    .then(res => res.json())
    .then(generators => setGenerators(generators))
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
          <label htmlFor="">runtime:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">temperature:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">battery charge:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">fuel level:</label>
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
              <th>runtime</th>
              <th>temperature</th>
              <th>battery charge</th>
              <th>fuel level</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {generators.map((item)=>(
            <tr key={item.id}>
              <td>{item.formatted_time}</td>
              <td>{item.date}</td>
              <td>{item.team.team_name}</td>
              <td>{item.shift}</td>
              <td>{item.name}</td>
              <td>{item.runtime}</td>
              <td>{item.temperature}</td>
              <td>{item.battery_charge}</td>
              <td>{item.fuel_level}</td>
              <td>
                <Link to="/generators/:id">
                <button>
                  <div  className='edit-gen'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
                <button>
                  <div className='delete-gen'>
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

export default Generator