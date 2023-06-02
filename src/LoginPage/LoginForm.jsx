import React from 'react'
import { useState } from 'react';
import '@fontsource/roboto/700.css';
import { TextField,Typography,Button  } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import "./LoginForm.css"
import GoogleIcon from '@mui/icons-material/Google';


export default function LoginForm ({ authenticated, setAuthenticated }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (username && password) {
        alert(`Username: ${username}\nPassword: ${password}`);
      } else {
        throw new Error('Please enter both username and password.');
      }
    } catch (error) {
      alert(error.message);
    }finally{
      setPassword("")
      setUsername("")
      window.location.href="/login"
    }
  };
  if (authenticated) {
    return <div>You are already logged in!</div>;
  }

    return (
  <>
    <form className='container-form' onSubmit={handleSubmit}>
    <Typography 
    style={{position:'absolute',left:70} }
    variant="h3" 
    component="h3"
    mt={-60}
    >
    LOGIN
    </Typography>
      
  <TextField 
  style={{width:250,position:'relative'}}
  id="standard-basic" 
  label="User Name" 
  variant="standard" 
  type="text"
  value={username}
  onChange={handleUsernameChange}/>
  <TextField 
  style={{top:-200,width:250,position:'relative'}} 
  id="standard-basic" 
  label="Password" 
  variant="standard" 
  type="password"
  value={password}
  onChange={ handlePasswordChange}
  />
<Button 
style={{position:'absolute',
width:200,left:100,
marginTop:100}}
variant="outlined"
type='submit'>
Login
</Button>
<div className='icons'>
<GoogleIcon color="primary" style={{position:'relative',
fontSize:70,}}/>
<AnalyticsIcon color="primary" style={{position:'relative',
fontSize:70,padding:20}}/>
</div>
</form>
<div className='container-second' ></div>
<div className='container-third'></div>
<div className='container-fourth'></div>
<div className='container-five'></div>

</>

  )
  }
