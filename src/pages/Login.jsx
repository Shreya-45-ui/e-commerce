
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'
import { useState } from 'react';
function Login() {
    const[Name,setName]=useState()
    const[Email,setEmail]=useState()
    const[Password,setPassword]=useState()
    const navigate=useNavigate()
    const handlesubmit =(e)=>{
     e.preventDefault(); 

   
    if (Name && Email && Password) {
      
      console.log('Login successful');
      navigate("/home"); 
    } else {
      alert('Please fill in all fields correctly.');
    }
  };
        
    return(
        <>
          <div>
             <div className="signup-container">
                <div className="signup-box">
                    <h2> WELCOME </h2>
                    <form  onSubmit={handlesubmit}>
                        <input type="Name"placeholder="Username"value={Name}
                        onChange={(e) => setName(e.target.value)} />
                        <input type="Email"placeholder="Email"value={Email}
                       onChange={(e) => setEmail(e.target.value)} />
                        <input type="Password"placeholder="Password" value={Password}
                       onChange={(e) => setPassword(e.target.value)} />
                       <button className="signup-btn" type="submit">Login</button>
                    </form>
                    
                </div>
             </div>
          </div>
        </>
    )
}
export default Login
