import "./LoginForm.css"
import { useState } from "react";

export default function LoginForm() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleChange = () => {
        if(email && password)
        {
            window.location.href="/Product";
            
        }
        else
        {
            window.location.href="/Login"
        }
    
    }

  return (
    <>
        <div className="formContainer">
            <h1>Login</h1>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required onChange={(e)=>
                {
                    setEmail(e.target.value);
                }}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button onClick = {handleChange} >Submit</button>
                
            </div>
        </div>
    </>
  );
}

