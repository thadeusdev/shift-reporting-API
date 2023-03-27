import React, { useEffect, useState } from 'react';
import './SplitUnit.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

const SplitUnit = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(src);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [src, setSrc] = useState([])
  const [teams, setTeams] = useState([])
  const [editingId, setEditingId] = useState(-1);

  useEffect(() => {
    fetch('/srcs')
    .then(res => res.json())
    .then(src => setSrc(src))
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

    fetch('/srcs', {
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
    .then(newSr => {
      setSrc([...src, newSr])
      console.log(newSr)
    })
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newSrc) => {
    fetch(`/srcs/${newSrc.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSrc),
    })
    .then(res => res.json())
    .then(() => {
      setSrc(prevSr => {
        const newSrcArray = [...prevSr];
        newSrcArray[id] = newSrc;
        return newSrcArray;
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
              <th>staus</th>
              <th>note</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {src.map((sr, id)=>(
            <tr key={sr.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='time'
                    value={sr.time}
                    onChange={e => setSrc((prevSr) => {
                      const newSrcArray = [...prevSr];
                      newSrcArray[id].time = e.target.value;
                      return newSrcArray
                    })}
                  />
                ) : (
                  sr.formatted_time
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='date'
                    value={sr.date}
                    onChange={e => setSrc((prevSr) => {
                      const newSrcArray = [...prevSr];
                      newSrcArray[id].date = e.target.value;
                      return newSrcArray
                    })}
                  />
                ) : (
                  sr.date
                )}
              </td>
              <td>
                {editingId === id ? (
                  <select value={sr.team_id} onChange={e => setSrc((prevSr) => {
                    const newSrcArray = [...prevSr];
                    newSrcArray[id].team_id = e.target.value;
                    return newSrcArray
                  })}
                  >
                  {teams.map(item => (
                    <option key={item.id} value={item.id}>{item.team_name}</option>
                  ))}            
                  </select>
                ) : (
                  sr.team.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={sr.shift}
                    onChange={e => setSrc((prevSr) => {
                      const newSrcArray = [...prevSr];
                      newSrcArray[id].shift = e.target.value;
                      return newSrcArray
                    })}
                  />
                ) : (
                  sr.shift
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={sr.name}
                    onChange={e => setSrc((prevSr) => {
                      const newSrcArray = [...prevSr];
                      newSrcArray[id].name = e.target.value;
                      return newSrcArray
                    })}
                  />
                ) : (
                  sr.name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={sr.status}
                    onChange={e => setSrc((prevSr) => {
                      const newSrcArray = [...prevSr];
                      newSrcArray[id].status = e.target.value;
                      return newSrcArray
                    })}
                  />
                ) : (
                  sr.status
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={sr.note}
                    onChange={e => setSrc((prevSr) => {
                      const newSrcArray = [...prevSr];
                      newSrcArray[id].note = e.target.value;
                      return newSrcArray
                    })}
                  />
                ) : (
                  sr.note
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, src[id])}>
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

export default SplitUnit