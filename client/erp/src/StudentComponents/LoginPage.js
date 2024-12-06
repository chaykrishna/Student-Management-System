import { Button, FormControl, Paper, Stack, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

function LoginPage({ handleAuthToggle, handleRoleChange }) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(1);  // Role 1 is for student, 2 is for faculty
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Modify handleLogin function
  const handleLogin = async () => {
    handleRoleChange(selectedRole); // Update role in parent

    // Check for valid ID and password
    if (!id || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const loginData = { email: id, password }; // Send email and password to backend

      // Determine the correct API URL based on role
      const apiUrl = selectedRole === 1 
        ? 'http://localhost:5000/student/login' // For student login
        : 'http://localhost:5000/faculty/login'; // For faculty login

      // Send POST request to backend
      const response = await axios.post(apiUrl, loginData); 

      // Save the JWT token to local storage
      localStorage.setItem('token', response.data.token);

      // Based on the selected role, navigate to the respective page
      if (selectedRole === 1) { 
        navigate('/student/home'); // Navigate to student home
      } else if (selectedRole === 2) { 
        navigate('/faculty/home'); // Navigate to faculty home
      }
    } catch (err) {
      // Handle login failure
      if (err.response) {
        setErrorMessage(err.response.data.msg || 'Login failed');
      } else {
        setErrorMessage('Network or server error');
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${process.env.PUBLIC_URL}/logokl.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '10px',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/kl-removebg-preview.png`} 
          alt="College Logo" 
          style={{ width: '150px', height: '150px', objectFit: 'contain' }} 
        />
      </div>

      <FormControl style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={12} style={{ alignContent: 'center', width: '400px', padding: '20px', backgroundColor: 'white' }}>
          <Stack spacing={3}>
            <FormControl variant="filled">
              <InputLabel>Select Role</InputLabel>
              <Select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)} // Update selected role state
              >
                <MenuItem value={1}><center>Student</center></MenuItem>
                <MenuItem value={2}><center>Faculty</center></MenuItem>
              </Select>
            </FormControl>
            <TextField 
              variant="filled" 
              label="ID" 
              value={id} 
              onChange={(e) => setId(e.target.value)} // Set ID
            />
            <TextField 
              variant="filled" 
              label="Password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Set password
            />
            {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>} {/* Error message */}
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
            <div style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', color: 'darkblue' }}>
              <p style={{ margin: '2', fontSize: 'small' }}>Forgot Password?</p>
            </div>
          </Stack>
        </Paper>
      </FormControl>
    </div>
  );
}

export default LoginPage;
