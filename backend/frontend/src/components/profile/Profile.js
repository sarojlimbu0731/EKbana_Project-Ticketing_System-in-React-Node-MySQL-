import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './profile.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Profile = ({setModal,user}) => {

  
  return (
    <div className='profile'>
        <div className='pContainer'>
            <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setModal(false)} className="pClose" />
                <h3>fullname</h3>
                <h3>email</h3>
                <h3>password</h3>
        </div>
    </div>
  )
}

export default Profile;