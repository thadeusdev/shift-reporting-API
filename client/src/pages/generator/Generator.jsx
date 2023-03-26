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
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('/generators')
    .then(res => res.json())
    .then(generators => setGenerators(generators))
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
  const [runtime, setRuntime] = useState('')
  const [temperature, setTemperature] = useState('')
  const [battery_charge, setBattery_charge] = useState('')
  const [fuel_level, setFuel_level] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/generators', {
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
        runtime: runtime,
        temperature: temperature,
        battery_charge: battery_charge,
        fuel_level: fuel_level
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
          <label htmlFor="">runtime:</label>
          <input type="text" value={runtime} onChange={e => setRuntime(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">temperature:</label>
          <input type="text" value={temperature} onChange={e => setTemperature(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">battery charge:</label>
          <input type="text" value={battery_charge} onChange={e => setBattery_charge(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">fuel level:</label>
          <input type="text" value={fuel_level} onChange={e => setFuel_level(e.target.value)} />
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