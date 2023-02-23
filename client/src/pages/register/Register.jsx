import React from "react"
import axios from "axios"

import NavbarLight from "../../components/navbar_light/NavbarLight"
import "./register.scss"

function Register(){
    const[name, setName] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')

    async function registerUser(event) {
        event.preventDefault();
    
        axios.post("http://localhost:5000/api/users",{
            name: name,
            email: email,
            password: password,
    
        },)
        .then(res=>{
            console.log(res.data);
            window.location.href = "http://localhost:3000/";
        })
      }

    return(
        <div className="register-page">
            <NavbarLight/>
            <div className="register-wrapper">
                <div className="register-container">

                    <div className="register-content">
                        <h1>Регистрация</h1>
                        <form onSubmit={(e)=>registerUser(e)} action="">
                            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Имя" name="" id="" />

                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Почта" name="" id="" />

                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Пароль" name="" id="" />

                            <button type="submit">Создать аккаунт</button>
                        </form>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Register
