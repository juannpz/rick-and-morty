import { useState } from "react";
import styles from "./Form.module.css"

const Form = (props) => {

    const [user, setUser] = useState({
        email: "", 
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(user)
    }

    const validate = (input) => {
        const error = {}
        const regexEmail = (/\S+@\S+\.\S+/)
        const regexPassword = new RegExp("[0-9]")
        if (!regexEmail.test(input.email)) error.email = "formato de e-mail incorrecto"
        if (!input.email) error.email = "ingresa un email"
        if (input.email.length > 35) error.email = "el email no puedo tener más de 35 caracteres"
        if (!regexPassword.test(input.password)) error.password = "password debe tener al menos un número"
        if (input.password.length <  6 || input.password.length > 10) error.password = "debe tener entre 6 y 10 caracteres"
        return error
    }
    
    const handleChange = (event) => {
        console.log(event.target);
        // if (event.target.name === "username") setUser({...user, username: event.target.value})
        // else if (event.target.name === "email") setUser({...user, email: event.target.value.toLowerCase()})
        // else if(event.target.name === "password") setUser({...user, password: event.target.value})

        const {name, value} = event.target
        setUser({
            ...user,
            [name] : value})
        setErrors(validate({
            ...user,
            [name]: value
        }))   
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>

            <label >user</label>
            <input
                key="1"
                onChange={handleChange}
                value= {user.username}type="text"
                placeholder="username"
                name="username" />

            <label >email</label>
            <input
                key="2"
                onChange={handleChange}
                value= {user.email}
                type="email"
                placeholder="email"
                name="email"/>
            <span>{errors.email && errors.email}</span>

            <label>Password</label>
            <input
                key="3"
                onChange={handleChange}
                value= {user.password}
                type="password"
                placeholder="password"
                name="password"/>
            <span>{errors.password && errors.password}</span>

            <input
                key=""
                type="submit" 
                placeholder="submit"
                name="submit">
            </input>
        </form>
    </div>
    )
}
export default Form