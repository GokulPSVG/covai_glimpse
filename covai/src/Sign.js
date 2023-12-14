import React, { useEffect, useState } from 'react'
import './Sign.css'
import axios from 'axios'

const Sign = ({setpage1,setdata}) => {

    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const [mobileNumber,setmobileNumber]=useState('')

 useEffect(()=>{
    fetch('http://localhost:3001/dashboard/user', {
            method:"GET",
        })
        .then(async (res)=> await res.json())
        .then( (data)=>{
             console.log(data , "userData")
             setdata(data.data)
         
        })
 })

    const handleForm=(e)=>{
        e.preventDefault()
        console.log('hi')
        axios.post('http://localhost:3001/app/signup',{
            name:name,
            password:password,
            mobileNumber:mobileNumber
        })
          .then(res => console.log('server is working'));
        setname('')
        setpassword('')
        setmobileNumber('')
        setpage1(true)
    }
    

  return (
    <div className='Sign'>
            <img src={require('./images/userIcon.png')} alt='Signup'></img>
            <div className='formElement'>
                <form className='SignupForm' onSubmit={(e)=>{handleForm(e)}}>
                    <label>Username</label>
                    <input
                        value={name}
                        onChange={(e)=>{setname(e.target.value)}}
                        placeholder='Username'
                    ></input>
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={(e)=>{setpassword(e.target.value)}}
                        placeholder='Password'
                    ></input>
                    <label>Mobile Number</label>
                    <input
                        value={mobileNumber}
                        onChange={(e)=>{setmobileNumber(e.target.value)}}
                        placeholder='Mobile number'
                    ></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
    </div>
  )
}

export default Sign