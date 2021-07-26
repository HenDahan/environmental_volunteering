import React from "react";
{/* A little about our project */}
function AboutUs() {
    return (
        <div style={{
            backgroundColor: "lightgreen",
            height: "1000px"
        }}>
            <div style={{
                marginLeft: "50px",
            }}>
                <br/>
                <p>
                    <h1>An application that encourages people to volunteer for environment activities.</h1>
                    <h1>We hope that with the help of this application more and more people will be able to volunteer easily and help us save the environment.</h1>
                    <h2 style={{ color: "green" }}>Created as part of a web application course.</h2>
                </p>
            </div >
        </div >
    );
}

export default AboutUs;