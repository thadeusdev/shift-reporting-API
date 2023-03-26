import React, { useState, useEffect } from 'react';
import './Temperature.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
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

  const [temperatures, setTemperatures] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("/temperatures")
    .then(res => res.json())
    .then(temperatures => setTemperatures(temperatures))
  },[])

  useEffect(() => {
    fetch('/teams')
    .then(res => res.json())
    .then(teams => setTeams(teams))
  }, [])

  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [team_id, setTeam_id] = useState(null)
  const [shift, setShift] = useState('')
  const [ups_a, setUps_a] = useState('')
  const [ups_b, setUps_b] = useState('')
  const [mdb_a, setMdb_a] = useState('')
  const [mdb_b, setMdb_b] = useState('')
  const [battery_a, setBattery_a] = useState('')
  const [battery_b, setBattery_b] = useState('')
  const [data_hall, setData_hall] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/temperatures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        time: time,
        team_id: team_id,
        shift: shift,
        ups_a: ups_a,
        ups_b: ups_b,
        mdb_a: mdb_a,
        mdb_b: mdb_b,
        battery_a: battery_a,
        battery_b: battery_b,
        data_hall: data_hall
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
          <label htmlFor="">ups a:</label>
          <input type="text" value={ups_a} onChange={e => setUps_a(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">ups b:</label>
          <input type="text" value={ups_b} onChange={e => setUps_b(e.target.value)}/>
        </div>
        <div className="input-item">
          <label htmlFor="">mdb a:</label>
          <input type="text" value={mdb_a} onChange={e => setMdb_a(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">mdb b:</label>
          <input type="text" value={mdb_b} onChange={e => setMdb_b(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">batt a:</label>
          <input type="text" value={battery_a} onChange={e => setBattery_a(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">batt b:</label>
          <input type="text" value={battery_b} onChange={e => setBattery_b(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">data hall:</label>
          <input type="text" value={data_hall} onChange={e => setData_hall(e.target.value)} />
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
              <td>{item.formatted_time}</td>
              <td>{item.date}</td>
              <td>{item.team.team_name}</td>
              <td>{item.shift}</td>
              <td>{item.ups_a}</td>
              <td>{item.ups_b}</td>
              <td>{item.mdb_a}</td>
              <td>{item.mdb_b}</td>
              <td>{item.battery_a}</td>
              <td>{item.battery_b}</td>
              <td>{item.data_hall}</td>
              <td>
                <Link to="/room_temperature/:id">
                <button>
                  <div  className='edit-temp'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
                <button>
                  <div className='delete-temp'>
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

export default Temperature