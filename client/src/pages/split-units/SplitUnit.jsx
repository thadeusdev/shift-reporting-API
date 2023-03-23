import React, { useEffect, useState } from 'react';
import './SplitUnit.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const SplitUnit = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(src);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [src, setSrc] = useState([])

  useEffect(() => {
    fetch('/srcs')
    .then(res => res.json())
    .then(src => setSrc(src))
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
              <th>id</th>
              <th>time</th>
              <th>date</th>
              <th>team member</th>
              <th>shift</th>
              <th>name</th>
              <th>staus</th>
              <th>note</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {src.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.time}</td>
              <td>{item.date}</td>
              <td>{item.team_id}</td>
              <td>{item.shift}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.note}</td>
              <td>
                <Link to="/split_units/:id">
                <button>
                  <div  className='edit-split'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
                <button>
                  <div className='delete-split'>
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

export default SplitUnit