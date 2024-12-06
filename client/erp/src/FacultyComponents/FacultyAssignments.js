import React from 'react';
import {  Container, Button } from '@mui/material';

const FacultyAssignments = () => {
  const handlePostAssignment = () => {
  };

  return (
    <Container>
      
      <center><div>
      
      <h1>Handle Assignments</h1>
      
    </div>
    </center>
    <center><Button variant="contained" color="primary" onClick={handlePostAssignment}>
      Post Assignment
      </Button>
      </center>
    </Container>
  );
};

export default FacultyAssignments;
