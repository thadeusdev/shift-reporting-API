import React, { useEffect, useState } from 'react';
import './Generator.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

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
  const [editingId, setEditingId] = useState(-1);

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

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newGenerators) => {
    fetch(`/generators/${newGenerators.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGenerators),
    })
    .then(res => res.json())
    .then(() => {
      setGenerators(prevGenerator => {
        const newGeneratorsArray = [...prevGenerator];
        newGeneratorsArray[id] = newGenerators;
        return newGeneratorsArray;
      })
      setEditingId(-1)
    })
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
          {generators.map((generator, id)=>(
            <tr key={generator.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={generator.time}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].time = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={generator.date}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].date = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={generator.team_id} onChange={e => setGenerators((prevGenerator) => {
                    const newGeneratorsArray = [...prevGenerator];
                    newGeneratorsArray[id].team_id = e.target.value;
                    return newGeneratorsArray
                  })}
                  >
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  generator.team.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={generator.shift}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].shift = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={generator.name}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].name = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={generator.runtime}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].runtime = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.runtime
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={generator.temperature}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].temperature = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.temperature
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={generator.battery_charge}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].battery_charge = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.battery_charge
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={generator.fuel_level}
                    onChange={e => setGenerators((prevGenerator) => {
                      const newGeneratorsArray = [...prevGenerator];
                      newGeneratorsArray[id].fuel_level = e.target.value;
                      return newGeneratorsArray
                    })}
                  />
                ) : (
                  generator.fuel_level
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, generators[id])}>
                    <div  className='edit-team'>
                    <BiSave style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                ) : (
                  <>
                  <button>
                    <div className='delete-team'  onClick={() => handleEditClick(id)}>
                    <FaEdit style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                  <button>
                    <div className='delete-team'>
                    <AiFillDelete style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                  </>
                )}
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