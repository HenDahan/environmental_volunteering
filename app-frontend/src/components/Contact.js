import React from "react";
{/* contact page with our github information */}
function Contact() {
    return (
        <div style={{
            backgroundColor: "lightblue",
            height: "1000px"
            
        }}>
            <div style={{
                marginLeft: "50px",
            }}>
                <div>
                    <br/>
                    <h1>Contact Us:</h1>
                    <p>
                        <h3>This Application was Created By:</h3>
                        <h4 style={{ color: "blueviolet" }}>Hen Dahan: &emsp; https://github.com/HenDahan</h4>
                        <h4 style={{ color: "blueviolet" }}>Kfir Ram: &emsp; https://github.com/kfir-ram</h4>
                        <h4 style={{ color: "blueviolet" }}>Tzuriel Yeffet: &emsp; https://github.com/TzurielYeffet</h4>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Contact;