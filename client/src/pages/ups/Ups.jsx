import React, { useEffect, useState } from 'react';
import './Ups.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Ups = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(ups);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [ups, setUps] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('/ups')
    .then(res => res.json())
    .then(ups => setUps(ups))
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
  const [ups_name, setUps_name] = useState('')
  const [voltage_L1L2, setVoltage_L1L2] = useState('')
  const [voltage_L2L3, setVoltage_L2L3] = useState('')
  const [voltage_L3L1, setvoltage_L3L1] = useState('')
  const [output_voltage_L1N, setOutput_voltage_L1N] = useState('')
  const [output_voltage_L2N, setOutput_voltage_L2N] = useState('')
  const [output_voltage_L3N, setOutput_voltage_L3N] = useState('')
  const [load_current_L1, setLoad_current_L1] = useState('')
  const [load_current_L2, setLoad_current_L2] = useState('')
  const [load_current_L3, setLoad_current_L3] = useState('')
  const [faulty_modules, setFaulty_modules] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/ups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        time: time,
        team_id: team_id,
        shift: shift,
        ups_name: ups_name,
        voltage_L1L2: voltage_L1L2,
        voltage_L2L3: voltage_L2L3,
        voltage_L3L1: voltage_L3L1,
        output_voltage_L1N: output_voltage_L1N,
        output_voltage_L2N: output_voltage_L2N,
        output_voltage_L3N: output_voltage_L3N,
        load_current_L1: load_current_L1,
        load_current_L2: load_current_L2,
        load_current_L3: load_current_L3,
        faulty_modules: faulty_modules,
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
          <input type="text" value={ups_name} onChange={e => setUps_name(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">voltage(L1-L2):</label>
          <input type="text" value={voltage_L1L2} onChange={e => setVoltage_L1L2(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">voltage(L2-L3):</label>
          <input type="text" voltage_L2L3 onChange={e => setVoltage_L2L3(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">voltage(L3-L1):</label>
          <input type="text" value={voltage_L3L1} onChange={e => setvoltage_L3L1(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">o/p voltage(L1-N):</label>
          <input type="text" value={output_voltage_L1N} onChange={e => setOutput_voltage_L1N(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">o/p voltage(L2-N):</label>
          <input type="text" value={output_voltage_L2N} onChange={e => setOutput_voltage_L2N(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">o/p voltage(L3-N):</label>
          <input type="text" value={output_voltage_L3N} onChange={e => setOutput_voltage_L3N(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">load current(L1):</label>
          <input type="text" value={load_current_L1} onChange={e => setLoad_current_L1(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">load current(L2):</label>
          <input type="text" value={load_current_L2} onChange={e => setLoad_current_L2(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">load current(L3):</label>
          <input type="text" value={load_current_L3} onChange={e => setLoad_current_L3(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">Faulty modules:</label>
          <input type="text" value={faulty_modules} onChange={e => setFaulty_modules(e.target.value)} />
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
              <th>voltage(LI-L2)</th>
              <th>voltage(L2-L3)</th>
              <th>voltage(L3-L1)</th>
              <th>o/p voltage(L1-N)</th>
              <th>o/p voltage(L2-N)</th>
              <th>o/p voltage(L3-N)</th>
              <th>load current(L1)</th>
              <th>load current(L2)</th>
              <th>load current(L3)</th>
              <th>faulty modules</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {ups.map((item)=>(
            <tr key={item.id}>
              <td>{item.formatted_time}</td>
              <td>{item.date}</td>
              <td>{item.team.team_name}</td>
              <td>{item.shift}</td>
              <td>{item.ups_name}</td>
              <td>{item.voltage_L1L2}</td>
              <td>{item.voltage_L2L3}</td>
              <td>{item.voltage_L3L1}</td>
              <td>{item.output_voltage_L1N}</td>
              <td>{item.output_voltage_L2N}</td>
              <td>{item.output_voltage_L3N}</td>
              <td>{item.load_current_L1}</td>
              <td>{item.load_current_L2}</td>
              <td>{item.load_current_L3}</td>
              <td>{item.faulty_modules}</td>
              <td>
                <Link to="/ups/:id">
                <button>
                  <div  className='edit-ups'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>                
                <button>
                  <div className='delete-ups'>
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

export default Ups