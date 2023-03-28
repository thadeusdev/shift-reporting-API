import React, { useState, useEffect } from 'react';
import './Alarms.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

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
  const [editingId, setEditingId] = useState(-1);

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
    .then(newAlarm => {
      setAlarms([...alarms, newAlarm])
      // console.log(newAlarm)
    })
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newAlarms) => {
    fetch(`/alarms/${newAlarms.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAlarms),
    })
    .then(res => res.json())
    .then(() => {
      setAlarms(prevAlarm => {
        const newAlarmsArray = [...prevAlarm];
        newAlarmsArray[id] = newAlarms;
        return newAlarmsArray;
      })
      setEditingId(-1)
    })
  }

  const handleDelete = (id) => {
    fetch(`/alarms/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setAlarms(alarms => alarms.filter(alarm => alarm.id !== id))
    })
    .catch(error => console.log('error:', error))
  }

  return (
    <div className='table'>
      <h2 style={{margin: '10px'}}>Alarms</h2>
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
          {alarms.map((alarm, id)=>(      
            <tr key={alarm.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={alarm.time}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].time = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={alarm.date}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].date = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={alarm.team_id} onChange={e => setAlarms((prevAlarm) => {
                    const newAlarmsArray = [...prevAlarm];
                    newAlarmsArray[id].team_id = e.target.value;
                    return newAlarmsArray
                  })}
                  >                
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  alarm.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={alarm.shift}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].shift = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={alarm.name}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].name = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={alarm.category}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].category = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.category
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={alarm.root_cause}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].root_cause = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.root_cause
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={alarm.action_taken}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].action_taken = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.action_taken
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={alarm.reason_uncleared}
                    onChange={e => setAlarms((prevAlarm) => {
                      const newAlarmsArray = [...prevAlarm];
                      newAlarmsArray[id].reason_uncleared = e.target.value;
                      return newAlarmsArray
                    })}
                  />
                ) : (
                  alarm.reason_uncleared
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, alarms[id])}>
                    <div  className='edit-team'>
                    <BiSave style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                ) : (
                  <>
                  <button  onClick={() => handleEditClick(id)}>
                    <div className='delete-team'>
                    <FaEdit style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                  <button onClick={(e) => handleDelete(alarm.id)}>
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

export default Alarms