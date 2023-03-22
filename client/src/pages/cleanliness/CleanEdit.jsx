import React from 'react';
import './Clean.scss';
import {cleanliness} from '../../data';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
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
              <th>id</th>
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
              <td>{clean.id}</td>
              <td>{clean.time}</td>
              <td>{clean.date}</td>
              <td>{clean.team}</td>
              <td>{clean.shift}</td>
              <td>{clean.room}</td>
              <td>{clean.status}</td>
              <td>{clean.note}</td>
              <td>
                <button>
                  <div  className='edit-clean'>
                  <BiSave style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                <Link to="/cleanliness">
                <button>
                  <div className='delete-clean'>
                  <MdCancelPresentation style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
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