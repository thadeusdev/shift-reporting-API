import React, { useState } from 'react';
import './Member.scss';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from 'react-router-dom';

const Member = ({item, members, setMembers, setEditState}) => {
  function handleName(e){
    const team_name = e.target.value;
    const updatedMembers = members.map((d) => d.id === item.id ? {...d, team_name:team_name} : d)
    setMembers(updatedMembers)
  }

  function handleRole(e){
    const role = e.target.value;
    const updatedMembers = members.map((d) => d.id === item.id ? {...d, role:role} : d)
    setMembers(updatedMembers)
  }

  function handleUpdate(){
    setEditState(-1)
  }

  return (
    <>
            <tr key={item.id}>
              <td><input type="text" onChange={handleName} value={item.team_name} /></td>
              <td><input type="text" onChange={handleRole} value={item.role} /></td>
              <td>
                <button onClick={handleUpdate}>
                  <div  className='edit-team'>
                  <BiSave style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                <Link to="/members">
                <button>
                  <div className='delete-team'>
                  <MdCancelPresentation style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
              </td>
            </tr>
    </>
  )
}

export default Member