import React, { useEffect, useState } from 'react';
import './Alarms.scss';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';

const Alarms = ({alarm, alarms, setAlarms, setEditState}) => {
  function handleName(e){
    const name = e.target.value;
    const updatedAlarms = alarms.map((d) => d.id === alarm.id ? {...d, name:name} : d)
    setAlarms(updatedAlarms)
  }

  function handleDate(e){
    const date = e.target.value;
    const updatedAlarms = alarms.map((d) => d.id === alarm.id ? {...d, date:date} : d)
    setAlarms(updatedAlarms)
  }

  function handleUpdate(){
    setEditState(-1)
  }

  return (
    <>
            <tr key={alarm.id}>
              <td><input type='text' value={alarm.formatted_time} name='name' placeholder=''/></td>
              <td><input type='date' onChange={handleDate} value={alarm.date} name='name' placeholder=''/></td>
              <td><input type='text' value={alarm.team_name} name='name' placeholder=''/></td>
              <td><input type='text' value={alarm.shift} name='name' placeholder=''/></td>
              <td><input type='text' onChange={handleName} value={alarm.name} name='name' placeholder=''/></td>
              <td><input type='text' value={alarm.category} name='name' placeholder=''/></td>
              <td><input type='text' value={alarm.root_cause} name='name' placeholder=''/></td>
              <td><input type='text' value={alarm.action_taken} name='name' placeholder=''/></td>
              <td><input type='text' value={alarm.reason_uncleared} name='name' placeholder=''/></td>
              <td>
                {/* <Link to="/alarms/:id"> */}
                <button  onClick={handleUpdate}>
                  <div  className='edit'>
                  <BiSave style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                {/* </Link> */}
                <Link to="/alarms">
                <button>
                  <div className='delete'>
                  <MdCancelPresentation style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>
              </td>
            </tr>
    </>
  )
}

export default Alarms