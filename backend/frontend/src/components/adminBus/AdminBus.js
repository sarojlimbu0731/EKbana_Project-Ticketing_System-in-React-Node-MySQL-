import axios from 'axios';
import React from 'react';
// import { useLocation} from 'react-router-dom';
import './adminBus.css'

const AdminBus = ({bus,index}) => {


    const handleDelete=async()=>{
        await axios.delete(`/buses/deletebus/${bus.busId}`)    
    }

  return (
    // <div className={index===0 ?'adminBus index':'adminBus'}>
         <div className='adminBus'>
    
        <div className='aContainer'>
            <div className='abus'>
                <div className='busfeature'>
                    <label>BusId</label>
                    <span>{bus.busId}</span>
                </div>
                <div className='busfeature'>
                    <label>Bus Name</label>
                    <span>{bus.name}</span>
                </div>
                <div className='busfeature'>
                    <label>From</label>
                    <span>{bus.from}</span>
                </div>
                <div className='busfeature'>
                    <label>Destination</label>
                    <span>{bus.to}</span>
                </div>
                <div className='busfeature'>
                    <label>Rate</label>
                    <span>{bus.rate}</span>
                </div>
                <div className='busfeature'>
                    <label>Travel Date</label>
                    <span>{bus.date}</span>
                </div>
                <div className='busfeature'>
                    <button className='update'>Update</button>
                </div>
                <div className='busfeature'>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminBus