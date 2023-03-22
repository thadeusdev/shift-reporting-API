import React from 'react';
import './Temperature.scss';
import {temperatures} from '../../data';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Temperature = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(temperatures);
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
          <label htmlFor="">ups a:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">ups b:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">mdb a:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">mdb b:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">batt a:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">batt b:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">data hall:</label>
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
              <th style={{textTransform: "uppercase"}}>UPS A</th>
              <th style={{textTransform: "uppercase"}}>UPS B</th>
              <th style={{textTransform: "uppercase"}}>mdb A</th>
              <th style={{textTransform: "uppercase"}}>mdb B</th>
              <th style={{textTransform: "uppercase"}}>batt A</th>
              <th style={{textTransform: "uppercase"}}>batt B</th>
              <th>data hall</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {temperatures.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.time}</td>
              <td>{item.date}</td>
              <td>{item.team}</td>
              <td>{item.shift}</td>
              <td>{item.ups_a}</td>
              <td>{item.ups_b}</td>
              <td>{item.mdb_a}</td>
              <td>{item.mdb_b}</td>
              <td>{item.battery_a}</td>
              <td>{item.battery_b}</td>
              <td>{item.datahall}</td>
              <td>
                <button>
                  <div  className='edit-temp'>
                  <BiSave style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                <Link to="/room_temperature">
                <button>
                  <div className='delete-temp'>
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

export default Temperature