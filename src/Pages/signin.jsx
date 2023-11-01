import React, { useState } from 'react'
import "./signlog.css"

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }


    const handleonSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(email,password),
          });
    
          if (response.status === 200) {
            // Handle successful signup
            response.status(200).json({ message: 'User registered successfully' });
    
          } else {
            // Handle error or display error message
            console.log("error")
          }
        } catch (error) {
          // Handle network or other errors
          console.error(error);
        //   response.status(500).json({ message: 'Server error' });
        }
      };

    return(
        <>
        <div className="container-div">
            <form className="form-box">
                <h2>Signin</h2>
            <input className="input-field" value = {email} onChange={handleEmailInput}  placeholder="Email" required/>
            <br />
            <input className="input-field" value = {password} onChange={handlePasswordInput} placeholder="Password" required/> 
            <br />
            <button className="buttons" onClick={handleonSubmit}>Signin</button>
        </form>
        </div>
        </>
    )
};


export default Signin