import React from 'react';
import "./Contact.css";
const Contact = () => {
    return (
        <body>
            <div className='two'>
                <div className='login'>
                    <from action="">
                        <h1>LOG <span>IN</span> </h1>
                        <label for="">Username</label>
                        <input type='text'></input><br></br>
                        <label for="">Password</label>
                        <input type='password'></input>
                        <br></br>
                        <button>Submit</button>
                        <div className='footer'>
                            <div class="forgot_password">forgot Password</div>
                            <div class="slash"></div>
                            <div class="signup">sign up</div>
                        </div>
                    </from>
                </div>
            </div>
        </body>
    )
}

export default Contact;