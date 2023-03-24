import React, { useEffect, useState } from 'react';
import './Member.scss';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

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
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  const handleDelete = (id) => {
    fetch(`/teams/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setMembers(members.filter(item => item.id !== id))
    })
    .catch(error => console.log('error:', error))
  }

  return (
    <div className='table'>
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
          {members.map((item)=>(
            <tr key={item.id}>
              <td>{item.team_name}</td>
              <td>{item.role}</td>
              <td>
                <Link to="/members/:id">
                <button>
                  <div  className='edit-team'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
                <button>
                  <div className='delete-team'  onClick={() => handleDelete(item.id)}>
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

export default Member