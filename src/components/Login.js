import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setLog }) {
    const [value, setVAlue] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) => {
        if (e.target.value === "55") {
            setVAlue(false)
            setLog(true)
            navigate("/categories")
        } else {
            setVAlue("error")
        }
    }
    return (
        <div>
            <form>
                <input onChange={handleLogin}></input>
                {value && <span>{value}</span>}
                <Link to="/categories">
                    <button onClick={() => { setLog(true) }}>login</button>
                </Link>
            </form></div>
    )
}

export default Login