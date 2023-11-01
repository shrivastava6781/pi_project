import React from 'react'
import "./user.css"
import { Link } from 'react-router-dom'

const UserRole = () => {
  return (
    <div className='user-role'>
        <div className='admin'>
        <Link className='card' to={"/signin"}>
            <h2>Admin</h2>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-cqV-aGe4jcDrt9MXAkp_uGOBFsBbmlLunQuD2xCt7pNXCdhVsL4ZTIqCRvakX81QTg&usqp=CAU" alt="" />
            </div>
            </Link>
        </div>
        <div className='student'>
           <Link className='card' to={"/signin"}>
            <h2>Student</h2>
            <div className='card'>
                <img src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png" alt="" />
            </div>
            </Link>
        </div>
    </div>
  )
}

export default UserRole