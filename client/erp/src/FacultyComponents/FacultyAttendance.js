import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';

const FacultyAttendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Sahil', attendance: 'Present' },
    { id: 2, name: 'Krishna', attendance: 'Present' },
    { id: 3, name: 'Eshwar', attendance: 'Present' },
  ]);

  const handleAttendanceChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, attendance: student.attendance === 'Present' ? 'Absent' : 'Present' }
          : student
      )
    );
  };

  const handleSubmit = () => {
    console.log('Attendance data submitted:', students);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Faculty Attendance</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={student.attendance === 'Absent'}
                    onChange={() => handleAttendanceChange(student.id)}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <center>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          Submit Attendance
        </Button>
      </center>
    </div>
  );
};

export default FacultyAttendance;
