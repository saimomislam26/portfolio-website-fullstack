import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
const About = () => {
    const history = useHistory();
    const [userData, setuserData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch('http://localhost:4000/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            })
            const data = await res.json();
            console.log(data)
            setuserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
            history.push('/login')
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);
    return (
        <div className="container">
            <form method="GET">
                <div className="row about_info">
                    <div className="col-6 first-col">
                        <p>user ID</p>
                        <p>Name</p>
                        <p>email</p>
                        <p>phone</p>
                        <p>profession</p>
                    </div>
                    <div className="col-6 second-col">
                        <p>{userData._id}</p>
                        <p>{userData.name}</p>
                        <p>{userData.email}</p>
                        <p>{userData.phone}</p>
                        <p>{userData.work}</p>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default About
