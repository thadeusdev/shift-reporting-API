import React, { useEffect, useState } from 'react';
import './Crac.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

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
  const [editingId, setEditingId] = useState(-1);

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
    .then(newCrac => {
      setCracs([...cracs, newCrac])
      // console.log(newCrac)
    })
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newCracs) => {
    fetch(`/cracs/${newCracs.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCracs),
    })
    .then(res => res.json())
    .then(() => {
      setCracs(prevCrac => {
        const newCracsArray = [...prevCrac];
        newCracsArray[id] = newCracs;
        return newCracsArray;
      })
      setEditingId(-1)
    })
  }

  const handleDelete = (id) => {
    fetch(`/cracs/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setCracs(cracs => cracs.filter(crac => crac.id !== id))
    })
    .catch(error => console.log('error:', error))
  }

  return (
    <div className='table'>
      <h2 style={{margin: '10px'}}>CRACS</h2>
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
          {cracs.map((crac, id)=>(
            <tr key={crac.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={crac.time}
                    onChange={e => setCracs((prevCrac) => {
                      const newCracsArray = [...prevCrac];
                      newCracsArray[id].time = e.target.value;
                      return newCracsArray
                    })}
                  />
                ) : (
                  crac.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={crac.date}
                    onChange={e => setCracs((prevCrac) => {
                      const newCracsArray = [...prevCrac];
                      newCracsArray[id].date = e.target.value;
                      return newCracsArray
                    })}
                  />
                ) : (
                  crac.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={crac.team_id} onChange={e => setCracs((prevCrac) => {
                    const newCracsArray = [...prevCrac];
                    newCracsArray[id].team_id = e.target.value;
                    return newCracsArray
                  })}
                  >
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  crac.team.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={crac.shift}
                    onChange={e => setCracs((prevCrac) => {
                      const newCracsArray = [...prevCrac];
                      newCracsArray[id].shift = e.target.value;
                      return newCracsArray
                    })}
                  />
                ) : (
                  crac.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={crac.name}
                    onChange={e => setCracs((prevCrac) => {
                      const newCracsArray = [...prevCrac];
                      newCracsArray[id].name = e.target.value;
                      return newCracsArray
                    })}
                  />
                ) : (
                  crac.name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={crac.status}
                    onChange={e => setCracs((prevCrac) => {
                      const newCracsArray = [...prevCrac];
                      newCracsArray[id].status = e.target.value;
                      return newCracsArray
                    })}
                  />
                ) : (
                  crac.status
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={crac.note}
                    onChange={e => setCracs((prevCrac) => {
                      const newCracsArray = [...prevCrac];
                      newCracsArray[id].note = e.target.value;
                      return newCracsArray
                    })}
                  />
                ) : (
                  crac.note
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, cracs[id])}>
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
                  <button onClick={() => handleDelete(crac.id)}>
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

export default Crac