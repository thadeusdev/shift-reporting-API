import React, { useState, useEffect } from 'react';
import './Alarms.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
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
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("/alarms")
    .then(res => res.json())
    .then(alarms => setAlarms(alarms))
  }, [])

  useEffect(() => {
    fetch('/teams')
    .then(res => res.json())
    .then(teams => setTeams(teams))
  }, [])

  const [editState, setEditState] = useState(-1)

  function handleEdit(id){
    setEditState(id)
  }

  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [team_id, setTeam_id] = useState(null)
  const [shift, setShift] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [root_cause, setRoot_cause] = useState('')
  const [action_taken, setAction_taken] = useState('')
  const [reason_uncleared, setReason_uncleared] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/alarms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        time: time,
        team_id: team_id,
        shift: shift,
        name: name,
        category: category,
        root_cause: root_cause,
        action_taken: action_taken,
        reason_uncleared: reason_uncleared
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  return (
    <div className='table'>
      <form onSubmit={handleSubmit}>
        <div className="input-item">
          <label htmlFor="">time:</label>
          <input type="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">date:</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">team:</label>
          
          <select value={team_id} onChange={e => setTeam_id(e.target.value)}>
          {teams.map(item => (
            <option key={item.id} value={item.id}>{item.team_name}</option>
          ))}            
          </select>
        </div>
        <div className="input-item">
          <label htmlFor="">shift:</label>
          <input type="text" value={shift} onChange={e => setShift(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">category:</label>
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">cause:</label>
          <input type="text" value={root_cause} onChange={e => setRoot_cause(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">action:</label>
          <input type="text" value={action_taken} onChange={e => setAction_taken(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">reason uncleared:</label>
          <input type="text" value={reason_uncleared} onChange={e => setReason_uncleared(e.target.value)} />
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
              <td>{alarm.team.team_name}</td>
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