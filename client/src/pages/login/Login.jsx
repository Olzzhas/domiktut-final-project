import React from "react"
import axios from "axios"

import NavbarLight from "../../components/navbar_light/NavbarLight"
import "./login.scss"

function Login(){
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    async function registerUser(event) {
        event.preventDefault();
    
        axios.post("http://localhost:5000/api/tokens/authentication",{
            email: email,
            password: password,
    
        },)
        .then(res=>{
            console.log(res.data.authentication_token.token);
            localStorage.setItem("email", email)
            console.log(localStorage.getItem("email"));
            localStorage.setItem("accessToken", res.data.authentication_token.token)
            console.log("from local storage - " + localStorage.getItem("accessToken"));
            window.location.href = "http://localhost:3000/";
        })
        
      }

    return(
        <div className="register-page">
            <NavbarLight/>
            <div className="register-wrapper">
                <div className="register-container">

                    <div className="register-content">
                        <h1>Авторизация</h1>
                        <form onSubmit={(e)=>registerUser(e)} action="">
                        
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Почта" name="" id="" />

                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Пароль" name="" id="" />

                            <button type="submit">Войти</button>
                        </form>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Login
