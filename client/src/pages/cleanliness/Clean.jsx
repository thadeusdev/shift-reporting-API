import React, { useEffect, useState } from 'react';
import './Clean.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

const Clean = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(cleanliness);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [cleanliness, setCleanliness] = useState([])
  const [teams, setTeams] = useState([])
  const [editingId, setEditingId] = useState(-1);

  useEffect(() => {
    fetch('/cleans')
    .then(res => res.json())
    .then(cleanliness => setCleanliness(cleanliness))
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
  const [room, setRoom] = useState('')
  const [status, setStatus] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/cleans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        time: time,
        team_id: team_id,
        shift: shift,
        room: room,
        status: status,
        note: note
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newCleanliness) => {
    fetch(`/cleans/${newCleanliness.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCleanliness),
    })
    .then(res => res.json())
    .then(() => {
      setCleanliness(prevClean => {
        const newCleanlinessArray = [...prevClean];
        newCleanlinessArray[id] = newCleanliness;
        return newCleanlinessArray;
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
          <label htmlFor="">room:</label>
          <input type="text" value={room} onChange={e => setRoom(e.target.value)} />
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
              <th>room</th>
              <th>status</th>
              <th>note</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {cleanliness.map((clean, id)=>(
            <tr key={clean.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={clean.time}
                    onChange={e => setCleanliness((prevClean) => {
                      const newCleanlinessArray = [...prevClean];
                      newCleanlinessArray[id].time = e.target.value;
                      return newCleanlinessArray
                    })}
                  />
                ) : (
                  clean.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={clean.date}
                    onChange={e => setCleanliness((prevClean) => {
                      const newCleanlinessArray = [...prevClean];
                      newCleanlinessArray[id].date = e.target.value;
                      return newCleanlinessArray
                    })}
                  />
                ) : (
                  clean.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={clean.team_id} onChange={e => setCleanliness((prevClean) => {
                    const newCleanlinessArray = [...prevClean];
                    newCleanlinessArray[id].team_id = e.target.value;
                    return newCleanlinessArray
                  })}
                  >
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  clean.team.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={clean.shift}
                    onChange={e => setCleanliness((prevClean) => {
                      const newCleanlinessArray = [...prevClean];
                      newCleanlinessArray[id].shift = e.target.value;
                      return newCleanlinessArray
                    })}
                  />
                ) : (
                  clean.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={clean.room}
                    onChange={e => setCleanliness((prevClean) => {
                      const newCleanlinessArray = [...prevClean];
                      newCleanlinessArray[id].room = e.target.value;
                      return newCleanlinessArray
                    })}
                  />
                ) : (
                  clean.room
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={clean.status}
                    onChange={e => setCleanliness((prevClean) => {
                      const newCleanlinessArray = [...prevClean];
                      newCleanlinessArray[id].status = e.target.value;
                      return newCleanlinessArray
                    })}
                  />
                ) : (
                  clean.status
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={clean.note}
                    onChange={e => setCleanliness((prevClean) => {
                      const newCleanlinessArray = [...prevClean];
                      newCleanlinessArray[id].note = e.target.value;
                      return newCleanlinessArray
                    })}
                  />
                ) : (
                  clean.note
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, cleanliness[id])}>
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

export default Clean