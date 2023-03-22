import React from 'react';
import './Alarms.scss';
import {alarms} from '../../data';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Alarms = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(alarms);
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
          <label htmlFor="">type:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">cause:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">action:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">reason uncleared:</label>
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
              <th>type</th>
              <th>root cause</th>
              <th>action</th>
              <th>reason uncleared</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {alarms.map((alarm)=>(
            <tr key={alarm.id}>
              <td>{alarm.id}</td>
              <td>{alarm.time}</td>
              <td>{alarm.date}</td>
              <td>{alarm.team}</td>
              <td>{alarm.shift}</td>
              <td>{alarm.name}</td>
              <td>{alarm.type}</td>
              <td>{alarm.root_cause}</td>
              <td>{alarm.action}</td>
              <td>{alarm.reason_uncleared}</td>
              <td>
                {/* <Link to="/alarms/:id"> */}
                <button>
                  <div  className='edit'>
                  <BiSave style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                {/* </Link> */}
                <Link to="/alarms">
                <button>
                  <div className='delete'>
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

export default Alarms