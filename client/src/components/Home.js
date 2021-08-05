import React from 'react'
import myImage from '../images/saimom.png'

const Home = () => {
    return (
        <div>
            <div className="home_div">
                <div className="container home_div_content">
                    <div className="row info">
                        <div className="col-md-8 ban-col text-center text-white d-flex justify-content-center align-items-center order-2 " style={{ flexDirection: "column" }}>
                            <h1 className="font-weight-bolder">MD. Saimom Islam</h1>
                            <h3 className="design1">I am a React <span className="font-weight-bolder">WebDeveloper</span></h3>
                            {/* <!--CV Button--> */}
                            <div id="workarea">
                                <div className="position">

                                    {/* start button, nothing above this is necessary  */}
                                    <a href="https://drive.google.com/file/d/18sGpnbIdc52AhPHkHZPPuzZ6zFa3hPHA/view?usp=sharing"
                                        target="blank"><button className="button button2">CV</button></a>

                                </div>
                            </div>
                            {/* <!--end CV Button--> */}
                        </div>
                        <div className="col-md-4 img-col order-1">
                            <img src={myImage} class="img-fluid" alt="Myphoto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
