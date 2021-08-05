import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import signup from '../images/signupImage.jpg'
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    let name, value;
    const eventHandle = (e) => {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user
        const res = await fetch('http://localhost:4000/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })
        const data = await res.json()
        if (data.status === 400 || !data) {
            window.alert("Registration failed");
            console.log("Registration failed")

        }
        else {
            window.alert("Registration Successful");
            console.log("Registration successful")
        }
        history.push('./login')
    }
    return (
        <div class="signup-form">
            <div className="signup-content">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-center">Sign Up</h1>
                        <form method="POST" >
                            <div className="form-group mt-5">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-user"></span>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="name"
                                        value={user.name} onChange={eventHandle} placeholder="Username" required="required" />
                                </div>

                                <div className="input-group mt-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-paper-plane"></span>
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" name="email"
                                        value={user.email} onChange={eventHandle} placeholder="Email Address" required="required" />
                                </div>
                                <div className="input-group mt-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-phone"></span>
                                        </span>
                                    </div>
                                    <input type="number" className="form-control" name="phone" placeholder="phone"
                                        value={user.phone} onChange={eventHandle} required="required" />
                                </div>
                                <div className="input-group mt-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-briefcase"></span>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="work" placeholder="work place"
                                        value={user.work} onChange={eventHandle} required="required" />
                                </div>
                                <div className="input-group mt-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-lock"></span>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="password"
                                        value={user.password} onChange={eventHandle} placeholder="password" required="required" />
                                </div>
                                <div className="input-group mt-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-lock"></span>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="cpassword"
                                        value={user.cpassword} onChange={eventHandle} placeholder="confirm password" required="required" />
                                </div>
                                <div className="form-group for-btn">
                                    <input type="submit" name="signup" className="btn btn-primary btn-lg mt-3" value="register" onClick={postData} />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-6">
                        <div className="another">
                            <img src={signup} alt="signup" className="img-fluid mt-5" />
                            <h5>Already Have An account?</h5>
                            <NavLink to="/login" style={{ color: "#BF252B", fontSize: "1.5rem" }}>Login here</NavLink>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Signup
