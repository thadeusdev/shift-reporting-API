import React from 'react';
import './Member.scss';
import {members} from '../../data';
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
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

  return (
    <div className='table'>
            <form>
        <div className="input-item">
          <label htmlFor="">name:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">role:</label>
          <input type="text" />
        </div>        
        <button>submit</button>
      </form>
      <hr />
      <div className='table-container'>  
        <button onClick={exportToExcel}>Download</button>     
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>role</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {members.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>
                <button>
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
          ))}
          </tbody>
        </table>      
      </div>
    </div>
  )
}

export default Member