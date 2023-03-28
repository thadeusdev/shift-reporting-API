import React, { useState, useEffect } from 'react';
import './Temperature.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

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
  const [editingId, setEditingId] = useState(-1);

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
    .then(newTemperature => {
      setTemperatures([...temperatures, newTemperature])
      // console.log(newTemperature)
    })
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newTemperatures) => {
    fetch(`/temperatures/${newTemperatures.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTemperatures),
    })
    .then(res => res.json())
    .then(() => {
      setTemperatures(prevTemperature => {
        const newTemperaturesArray = [...prevTemperature];
        newTemperaturesArray[id] = newTemperatures;
        return newTemperaturesArray;
      })
      setEditingId(-1)
    })
  }

  const handleDelete = (id) => {
    fetch(`/temperatures/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setTemperatures(temperatures => temperatures.filter(temperature => temperature.id !== id))
    })
    .catch(error => console.log('error:', error))
  }
  
  return (
    <div className='table'>
      <h2 style={{margin: '10px'}}>Room Temperatures</h2>
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
          <option value="">Select</option>
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
          {temperatures.map((temperature, id)=>(
            <tr key={temperature.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={temperature.time}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].time = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={temperature.date}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].date = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={temperature.team_id} onChange={e => setTemperatures((prevTemperature) => {
                    const newTemperaturesArray = [...prevTemperature];
                    newTemperaturesArray[id].team_id = e.target.value;
                    return newTemperaturesArray
                  })}
                  >
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  temperature.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.shift}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].shift = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.ups_a}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].ups_a = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.ups_a
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.ups_b}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].ups_b = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.ups_b
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.mdb_a}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].mdb_a = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.mdb_a
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.mdb_b}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].mdb_b = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.mdb_b
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.battery_a}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].battery_a = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.battery_a
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.battery_b}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].battery_b = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.battery_b
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={temperature.data_hall}
                    onChange={e => setTemperatures((prevTemperature) => {
                      const newTemperaturesArray = [...prevTemperature];
                      newTemperaturesArray[id].data_hall = e.target.value;
                      return newTemperaturesArray
                    })}
                  />
                ) : (
                  temperature.data_hall
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, temperatures[id])}>
                    <div  className='edit-team'>
                    <BiSave style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                ) : (
                  <>
                  <button onClick={() => handleEditClick(id)}>
                    <div className='delete-team'>
                    <FaEdit style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                  <button onClick={() => handleDelete(temperature.id)}>
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

export default Temperature