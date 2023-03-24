import React, { useState, useEffect } from 'react';
import './Alarms.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import AlarmsEdit from './AlarmsEdit';

const Alarms = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(alarms);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [alarms, setAlarms] = useState([])

  useEffect(() => {
    fetch("/alarms")
    .then(res => res.json())
    .then(alarms => setAlarms(alarms))
  }, [])

  const [editState, setEditState] = useState(-1)

  function handleEdit(id){
    setEditState(id)
  }

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
              <th>time</th>
              <th>date</th>
              <th>team member</th>
              <th>shift</th>
              <th>name</th>
              <th>category</th>
              <th>root cause</th>
              <th>action taken</th>
              <th>reason uncleared</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {alarms.map((alarm)=>( 
            editState === alarm.id ? <AlarmsEdit alarm={alarm} alarms={alarms} setAlarms={setAlarms} setEditState={setEditState}/> :      
            <tr key={alarm.id}>
              <td>{alarm.formatted_time}</td>
              <td>{alarm.date}</td>
              <td>{alarm.team_name}</td>
              <td>{alarm.shift}</td>
              <td>{alarm.name}</td>
              <td>{alarm.category}</td>
              <td>{alarm.root_cause}</td>
              <td>{alarm.action_taken}</td>
              <td>{alarm.reason_uncleared}</td>
              <td>
                {/* <Link to="/alarms/:id"> */}
                <button onClick={() => handleEdit(alarm.id)}>
                  <div  className='edit'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                {/* </Link> */}
                <button>
                  <div className='delete'>
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

export default Alarms