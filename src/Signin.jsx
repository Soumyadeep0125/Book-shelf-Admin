import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Signin(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const fetchSignInData = (e) => {
        e.preventDefault();
    fetch('http://localhost:8000/AdminLogin', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.length !== 0) {
            console.log('User Exist');
            props.setConfirm("Login Successful")
          
          } else {
            console.log("User Don't Exist");
            props.setConfirm("Login failed")

          }
        })
        .catch((err) => {
          console.log(err.message);

        });
    }
    return (
        <div>
            <section className="container10">
                <div className="form Signin">
                    <div className="form-content">
                        <header>Admin Login</header>
                        <form >
                            <div className="field input-field">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input" />
                            </div>

                            <div className="field input-field">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="password" onBlur={fetchSignInData} />
                                <i className='bx bx-hide eye-icon'></i>
                            </div>

                            <div className="form-link">
                                <a href="/" className="forgot-pass">Forgot password?</a>
                            </div>

                            <div className="field button-field">
                            <Link to="/confirmation"><button>Login</button></Link>
                            </div>
                        </form>

                        <div className="form-link">
                            <span>Don't have an account? link</span>
                        </div>
                    </div>

                </div>




            </section>
        </div>
    )
}

export default Signin
