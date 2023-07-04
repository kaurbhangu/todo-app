import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


function Login(props) {
  
        const[formData,setFormData]=useState();
        const { message, setMessage, login} = useContext(AuthContext)
        const handleChange=(e)=>{
            let {name,value}=e.target;
            setFormData((prev)=>({
              ...prev,
              [name]:value
            }));
        };
        const submitForm=async(e)=>{              
            e.preventDefault();
            login(formData);
        }
               
    return (
        <form>
            
        <div className="mb-3">
            <label className="form-label" htmlFor="">Email</label>
            <input type="email" name="email" className='form-control' onChange={handleChange}></input>
        </div>

        <div className="mb-3">
            <label className="form-label" htmlFor="">Password</label>
            <input type="password" name="password" className='form-control' onChange={handleChange}></input><br></br>
            </div>
            <p>{message}</p>
            <button  className="btn btn-dark " onClick={submitForm}>Login</button>
            <p>Having problem in register? <Link to='about'>click here</Link>for help{""}</p>
           
        
        </form>
    );
}

export default Login;