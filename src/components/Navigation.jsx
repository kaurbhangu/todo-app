import React, { useContext, useEffect, useState } from 'react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import AuthContext from '../context/AuthContext';


function Navigation(props) {

const {user,setUser} = useContext(AuthContext);
const navigate=useNavigate();
const logout=()=>{
  localStorage.removeItem('user');
  setUser(null);
  navigate('/');
}
  //useEffect();-it is used to get and load data from local storage

  // useEffect(()=>{
     
  //   const localUser = localStorage.getItem("user");
  //   if(localUser === "undefined"){
  //     const user = JSON.parse(localUser);//json object convert into java script
  //     setUSer(user);
  //   }
     
    
  // },[])
          

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

   <Link className="navbar-brand" to="/" > <img src={logo} alt="logo"/></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {
          user?
          <>
        
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">{user?.name}</NavLink>
        </li>
        </>
        :
        <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create-task">CreateTask</NavLink>
          </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/task-list">TaskList</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">{user?.name}</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">profile</NavLink>
        </li>
        
       
        <li className='nav-item' onclick={logout}><button className='btn btn-dark'>Logout</button></li>
      </>
}
        </ul>

       
      
    </div>
  </div>
</nav>
    );
}
   
export default Navigation;