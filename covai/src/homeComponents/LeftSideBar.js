import React, { useState } from 'react'
import './LeftSideBar.css'
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

const LeftSideBar = ({profileName,settoggle}) => {

  const userName = profileName.length > 5 ? profileName.slice(0,5).toUpperCase()+'...' : profileName.toUpperCase();

  const handleProfile = (e)=>{
    settoggle(false)
  }  
  const handleHome = (e)=>{
    settoggle(true)
  }  

  return (
    <div className='LeftSideBar'>
      <div className='profileName'>
        <img src={require('.././images/userIcon.png')} alt='logo'></img>
        <h3>Hi,{userName}</h3>
      </div>  
      <div className='home'>
        <AiOutlineHome />
        <Link to='/home' className='home' onClick={(e)=>{handleHome(e)}}><p>Home</p></Link>
      </div> 
      <div className='profile'>
        <CgProfile />
        <Link to='/home/profile' className='profile' onClick={(e)=>{handleProfile(e)}}><p>Profile</p></Link>
      </div>   
      <Link to='/'><p className='logout'>Logout</p></Link>
    </div>
  )
}

export default LeftSideBar