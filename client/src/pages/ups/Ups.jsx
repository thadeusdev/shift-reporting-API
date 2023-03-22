import React from 'react';
import './Ups.scss';
import {ups} from '../../data';
import { FaEdit, } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const Ups = () => {
  const exportToExcel = () => {
    const fileName = 'data.xlsx';
    const sheetName = 'Sheet1';

    const ws = XLSX.utils.json_to_sheet(ups);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className='table'>
      <form>
        <div className="input-item">
          <label htmlFor="">time:</label>
          <input type="time" />
        </div>
        <div className="input-item">
          <label htmlFor="">date:</label>
          <input type="date" />
        </div>
        <div className="input-item">
          <label htmlFor="">team:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">shift:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">name:</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">voltage(L1-L2):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">voltage(L2-L3):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">voltage(L3-L1):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">o/p voltage(L1-N):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">o/p voltage(L2-N):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">o/p voltage(L3-N):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">load current(L1):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">load current(L2):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">load current(L3):</label>
          <input type="text" />
        </div>
        <div className="input-item">
          <label htmlFor="">Faulty modules:</label>
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
              <th>time</th>
              <th>date</th>
              <th>team member</th>
              <th>shift</th>
              <th>name</th>
              <th>voltage(LI-L2)</th>
              <th>voltage(L2-L3)</th>
              <th>voltage(L3-L1)</th>
              <th>o/p voltage(L1-N)</th>
              <th>o/p voltage(L2-N)</th>
              <th>o/p voltage(L3-N)</th>
              <th>load current(L1)</th>
              <th>load current(L2)</th>
              <th>load current(L3)</th>
              <th>faulty modules</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
          {ups.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.time}</td>
              <td>{item.date}</td>
              <td>{item.team}</td>
              <td>{item.shift}</td>
              <td>{item.name}</td>
              <td>{item.voltage_L1L2}</td>
              <td>{item.voltage_L2L3}</td>
              <td>{item.voltage_L3L1}</td>
              <td>{item.output_voltage_L1N}</td>
              <td>{item.output_voltage_L2N}</td>
              <td>{item.output_voltage_L3N}</td>
              <td>{item.load_current_L1}</td>
              <td>{item.load_current_L2}</td>
              <td>{item.load_current_L3}</td>
              <td>{item.faulty_modules}</td>
              <td>
                <Link to="/ups/:id">
                <button>
                  <div  className='edit-ups'>
                  <FaEdit style={{height: '15px', width: '15px'}} />
                  </div>
                </button>
                </Link>                
                <button>
                  <div className='delete-ups'>
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

export default Ups