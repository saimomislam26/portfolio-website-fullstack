import React, { useState, useEffect } from 'react'
import phone from '../images/phone.png'
import email from '../images/email.png'
import address from '../images/address.png'
const Contact = () => {
    const [userData, setuserData] = useState({
        name: "", email: "", message: ""
    });
    let name, value;
    const eventHandle = (e) => {
        name = e.target.name
        value = e.target.value
        setuserData({ ...userData, [name]: value })
    }
    const callContactPage = async () => {
        try {

            const res = await fetch('http://localhost:4000/getuser', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            })
            const data = await res.json();
            console.log(data)
            setuserData({ ...userData, name: data.name, email: data.email })

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        callContactPage();
    }, []);
    //sendMessage to backend by clicking send button
    const postMessage = async (e) => {
        e.preventDefault();
        const { name, email, message } = userData
        const res = await fetch('http://localhost:4000/contact', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                name, email, message
            })
        })
        const data = await res.json()
        if (!data || res.status === 400) {
            window.alert("Message Not sent");
            console.log("Message Not sent")
        }
        else {
            window.alert("Message Sent Successful");
            console.log("Message Sent successful")
            setuserData({ ...userData, message: "" })
        }
    }


    return (
        <div>
            <div className="contact-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 d-flex justify-content-between mt-5">
                            {/* for phone */}
                            <div className="contact-info-item d-flex justify-content-start align-items-center">
                                <img src={phone} alt="phone" className="img-fluid" style={{ height: "30px", width: "30px" }} />
                                <div className="contact-info-contact">
                                    <div className="contact-info-title">
                                        Phone
                                    </div>
                                    <div className="contact-info-text">
                                        01871266651
                                    </div>
                                </div>
                            </div>
                            {/* for mail */}
                            <div className="contact-info-item d-flex justify-content-start align-items-center">
                                <img src={email} alt="mail" className="img-fluid" style={{ height: "40px", width: "40px" }} />
                                <div className="contact-info-contact">
                                    <div className="contact-info-title">
                                        Email
                                    </div>
                                    <div className="contact-info-text" style={{ wordbreak: "break-all" }}>
                                        saimomislam26@gmail.com
                                    </div>
                                </div>
                            </div>
                            {/* for address */}
                            <div className="contact-info-item d-flex justify-content-start align-items-center">
                                <img src={address} alt="address" className="img-fluid" style={{ height: "40px", width: "40px" }} />
                                <div className="contact-info-contact">
                                    <div className="contact-info-title">
                                        Address
                                    </div>
                                    <div className="contact-info-text">
                                        Jamalkhan Road,Chittagong
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
            <div className="contact_form">
                <div className="container contact_form_item">
                    <form method="GET">
                        <div className="form-row row">
                            <div className="form-group col-md-6">
                                <label for="inputName">Name</label>
                                <input type="name" className="form-control" name="name" id="inputName" onChange={eventHandle} value={userData.name} placeholder="Your Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputEmail">Email</label>
                                <input type="email" className="form-control" name="email" onChange={eventHandle} id="inputEmail" value={userData.email} placeholder="abc@gmail.com"
                                    required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputMessage">Messages</label>
                            <textarea className="form-control" name="message" onChange={eventHandle} value={userData.message} id="exampleFormControlTextarea1"></textarea>
                        </div>
                    </form>
                    <form method="POST">
                        <div className="form-group for-btn">
                            <button type="submit" onClick={postMessage} className="btn btn-primary btn-lg mt-3">Send</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>





    )
}

export default Contact
