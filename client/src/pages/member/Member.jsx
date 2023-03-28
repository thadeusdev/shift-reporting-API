import React, { useEffect, useState } from 'react';
import './Member.scss';
import { FaEdit, } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';

const Member = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(members);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  const [members, setMembers] = useState([])
  const [editingId, setEditingId] = useState(-1);

  useEffect(() => {
    fetch('/teams')
    .then(res => res.json())
    .then(members => setMembers(members))
  }, [])

  const [team_name, setTeam_name] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team_name: team_name,
        role: role
      })
    })
    .then(res => res.json())
    .then(newMember => {
      setMembers([...members, newMember])
      // console.log(newMember)
    })
    .catch(error => console.log(error))
  }

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleUpdateClick = (id, newMembers) => {
    fetch(`/teams/${newMembers.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMembers),
    })
    .then(res => res.json())
    .then(() => {
      setMembers(prevMember => {
        const newMembersArray = [...prevMember];
        newMembersArray[id] = newMembers;
        return newMembersArray;
      })
      setEditingId(-1)
    })
  }

    const handleDelete = (id) => {
      fetch(`/teams/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => {
        setMembers(members => members.filter(row => row.id !== id))
      })
      .catch(error => console.log('error:', error))
    }

  return (
    <div className='table'>
      <h2 style={{margin: '10px'}}>Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-item">
          <label htmlFor="">name:</label>
          <input type="text" value={team_name} onChange={e => setTeam_name(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="">role:</label>
          <input type="text" value={role} onChange={e => setRole(e.target.value)} />
        </div>        
        <button>submit</button>
      </form>
      <hr />
      <div className='table-container'>  
        <button onClick={exportToExcel}>Download</button>     
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>role</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {members.map((row, id) => (
            <tr key={row.id}>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={row.team_name}
                    onChange={e => setMembers((prevMember) => {
                      const newMembersArray = [...prevMember];
                      newMembersArray[id].team_name = e.target.value;
                      return newMembersArray
                    })}
                  />
                ) : (
                  row.team_name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type='text'
                    value={row.role}
                    onChange={e => setMembers((prevMember) => {
                      const newMembersArray = [...prevMember];
                      newMembersArray[id].role = e.target.value;
                      return newMembersArray
                    })}
                  />
                ) : (
                  row.role
                )}
              </td>
              <td>
                {editingId === id ? (
                  <button onClick={() => handleUpdateClick(id, members[id])}>
                    <div  className='edit-team'>
                    <BiSave style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                ) : (
                  <>
                  <button   onClick={() => handleEditClick(id)}>
                    <div className='delete-team'>
                    <FaEdit style={{height: '15px', width: '15px'}} />
                    </div>
                  </button>
                  <button   onClick={(e) => handleDelete(row.id)}>
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

export default Member