import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


function Register(props) {

            const[user,setUser]=useState(null)
            const[formData,setFormData]= useState();
            const{ message , register} = useContext(AuthContext);



            const handleChange=(e)=>{
                let{name,value}=e.target;
                setFormData((prev)=>({
                    ...prev,
                    [name]:value
                }));
            };
            const submitForm=async(e)=>{
                e.preventDefault();
                register(formData);

            }
    return (
        <form>
        <div className="mb-3">
          
             <label htmlFor="cc1" >Name</label>
            <input type="text" name="name" id="cc1" className="form-control"  onChange={handleChange}></input>
            </div>
            
            <div className="mb-3">
            <label htmlFor="" >Emial</label>
            <input type="email" name="email" className="form-control"  onChange={handleChange}></input>
              </div>
            
            
            <div className="mb-3">
            <label htmlFor="" >Password</label>
            <input type="password" name="password" className="form-control"  onChange={handleChange}></input><br></br>
            <p>{message}</p>
            <button className="btn btn-dark btn-sm" onClick={submitForm}>Register</button>
            
            {/* <p>Having problem in register? <Link to='about'>click here</Link>for help</p> */}
            
        </div>
        </form>
    );
}

export default Register;