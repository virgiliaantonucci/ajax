import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { FormControl, Input, Button } from '@mui/material';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const {username, password} = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setFormData({
            username: '',
            password: ''
        })
    }

    return(
        <>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
        <FormControl>
            <Input //can change to text area to get rid of warnings, but this looks better
                placeholder="Username"
                type='text'
                name='username' 
                value={username} 
                onChange={handleChange}
            />
            <Input
                placeholder="Password" 
                type='password' 
                name='password' 
                value={password} 
                onChange={handleChange}
            />
            <Button
                type="submit"
            >
                Signup! 
            </Button>
        </FormControl>
        </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) : null }
        </>
    )
}

export default SignUp