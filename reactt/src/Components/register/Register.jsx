import React, { useState } from "react";
import './Register.css';
import logo from '../../assets/logo.png'

export default function Register() {

    return (
        <div className="container">
            <div id='logo-container'>
                <img src={logo} id='logo' alt="logo" />
            </div>
            <div className="form">
                <div className="form2">
                <h1 id='heading' className="">Sign up</h1>

                <input type="text" name="firstname" id='first-name' className="inputs" placeholder="First Name" />
                <input type="text" name="lastname" id='last-name' className="inputs" placeholder='Last Name' />
                <input type="text" name="username" id='username' className="inputs" placeholder='Username' />
                <input type="password" name="password" id='password' className="inputs" placeholder='Password' />

                <button id="button" className="btn button">Sign up</button>
                </div>
            </div>
        </div>
    );
}