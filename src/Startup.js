import './Startup.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Startup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    function shiftRegister() {
        const x = document.getElementById("login")
        const y = document.getElementById("register")
        const z = document.getElementById("btn")
        x.style.left = "-550px";
        y.style.left = "50px";
        z.style.left = "110px";
    }

    function shiftLogin() {
        const x = document.getElementById("login")
        const y = document.getElementById("register")
        const z = document.getElementById("btn")
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }

    useEffect(() => {
        // Attach the event handlers to the buttons
        document.querySelector('.toggle-button').addEventListener('click', shiftLogin);
        document.querySelector('.toggle-button').addEventListener('click', shiftRegister);
    }, []);

    return(
        <div className='form-container'>
            <div className='form-box'>
                <div className="button-box">
                    <div id="btn"></div>
                        <button type="button" className="toggle-button" onClick={shiftLogin}>Login</button>
                        <button type="button" class="toggle-button" onClick={shiftRegister}>Register</button>
                </div>
                <form id='login' className='login-input-group' onSubmit={handleSubmit}>
                    <input type="text" className="input-field" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" className="input-field" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="checkbox" className="check-box" id="remember" /><label htmlFor="remember">Remember Password</label>
                    <button type="submit" className="submit-btn">LOG-IN</button>
                </form>
                <form id="register" className="register-input-group">
                    <input type="text" class="input-field" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
                    <input type="email" class="input-field" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" class="input-field" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    <input type="checkbox" class="check-box" id="Verify" title="Verify" /><label htmlFor="Verify">Agree to terms & conditions</label>

                    <button type="submit" class="submit-btn">REGISTER</button>
                </form>
            </div>
        </div>
    )
}




export default Startup