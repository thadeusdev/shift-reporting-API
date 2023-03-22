import React from 'react';
import './Crac.scss';
import {cracs} from '../../data';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
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
              <th>status</th>
              <th>note</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {cracs.map((crac)=>(
            <tr key={crac.id}>
              <td>{crac.id}</td>
              <td>{crac.time}</td>
              <td>{crac.date}</td>
              <td>{crac.team}</td>
              <td>{crac.shift}</td>
              <td>{crac.name}</td>
              <td>{crac.status}</td>
              <td>{crac.note}</td>
              <td>
                <button>
                  <div  className='edit-crac'>
                  <BiSave style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                <Link to="/cracs">
                <button>
                  <div className='delete-crac'>
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

export default Crac