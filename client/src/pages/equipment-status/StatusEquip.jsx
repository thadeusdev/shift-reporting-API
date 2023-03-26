import React, { useEffect, useState } from 'react';
import './StatusEquip.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

const StatusEquip = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(equipment_status);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [equipment_status, setEquipment_status] = useState([])
  const [teams, setTeams] = useState([])
  const [editingId, setEditingId] = useState(-1);

  useEffect(() => {
    fetch('/equipment_states')
    .then(res => res.json())
    .then(equipment_status => setEquipment_status(equipment_status))
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

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/equipment_states', {
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
        status: status
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newEquipment_status) => {
    fetch(`/equipment_states/${newEquipment_status.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEquipment_status),
    })
    .then(res => res.json())
    .then(() => {
      setEquipment_status(prevEquipment_state => {
        const newEquipment_statusArray = [...prevEquipment_state];
        newEquipment_statusArray[id] = newEquipment_status;
        return newEquipment_statusArray;
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
          <label htmlFor="">status:</label>
          <input type="text" value={status} onChange={e => setStatus(e.target.value)} />
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
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {equipment_status.map((equipment_state, id)=>(
            <tr key={equipment_state.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={equipment_state.time}
                    onChange={e => setEquipment_status((prevEquipment_state) => {
                      const newEquipment_statusArray = [...prevEquipment_state];
                      newEquipment_statusArray[id].time = e.target.value;
                      return newEquipment_statusArray
                    })}
                  />
                ) : (
                  equipment_state.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={equipment_state.date}
                    onChange={e => setEquipment_status((prevEquipment_state) => {
                      const newEquipment_statusArray = [...prevEquipment_state];
                      newEquipment_statusArray[id].date = e.target.value;
                      return newEquipment_statusArray
                    })}
                  />
                ) : (
                  equipment_state.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={equipment_state.team_id} onChange={e => setEquipment_status((prevEquipment_state) => {
                    const newEquipment_statusArray = [...prevEquipment_state];
                    newEquipment_statusArray[id].team_id = e.target.value;
                    return newEquipment_statusArray
                  })}
                  >
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  equipment_state.team.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={equipment_state.shift}
                    onChange={e => setEquipment_status((prevEquipment_state) => {
                      const newEquipment_statusArray = [...prevEquipment_state];
                      newEquipment_statusArray[id].shift = e.target.value;
                      return newEquipment_statusArray
                    })}
                  />
                ) : (
                  equipment_state.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={equipment_state.name}
                    onChange={e => setEquipment_status((prevEquipment_state) => {
                      const newEquipment_statusArray = [...prevEquipment_state];
                      newEquipment_statusArray[id].name = e.target.value;
                      return newEquipment_statusArray
                    })}
                  />
                ) : (
                  equipment_state.name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={equipment_state.status}
                    onChange={e => setEquipment_status((prevEquipment_state) => {
                      const newEquipment_statusArray = [...prevEquipment_state];
                      newEquipment_statusArray[id].status = e.target.value;
                      return newEquipment_statusArray
                    })}
                  />
                ) : (
                  equipment_state.status
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, equipment_status[id])}>
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

export default StatusEquip