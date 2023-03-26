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
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('/cracs')
    .then(res => res.json())
    .then(cracs => setCracs(cracs))
  }, [])

  useEffect(() => {
    fetch('/teams')
    .then(res => res.json())
    .then(teams => setTeams(teams))
  }, [])

  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [team_id, setTeam_id] = useState(null)
  const [shift, setShift] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/cracs', {
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
        status: status,
        note: note
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
          <label htmlFor="">status:</label>
          <input type="text" value={status} onChange={e => setStatus(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">note:</label>
          <input type="text" value={note} onChange={e => setNote(e.target.value)} />
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
              <td>{crac.team.team_name}</td>
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