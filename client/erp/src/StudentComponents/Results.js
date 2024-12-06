import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack } from '@mui/material'
import React from 'react'

function Results() {
  return (
    <div><center><h1>Student Results</h1></center>
   <center> <Paper elevation={12} style={{width:"400px", padding:"35px",backgroundColor:"white"}}>
            <Stack spacing={3}>
                <FormControl>
                    <InputLabel variant="filled">Academic Year</InputLabel>
                    <Select>
                        <MenuItem value={1}>2023-2024</MenuItem>
                        <MenuItem value={2}>2022-2023</MenuItem>
                        <MenuItem value={3}>2021-2022</MenuItem>
                        <MenuItem value={4}>2020-2021</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel variant="filled"> Semester </InputLabel>
                    <Select>
                        <MenuItem value={1}>Odd</MenuItem>
                        <MenuItem value={2}>Even</MenuItem>
                        <MenuItem value={3}>Summer</MenuItem>
                     </Select>
                </FormControl>

                <FormControl>
                    <InputLabel variant="filled">Exam Type</InputLabel>
                    <Select>
                        <MenuItem value={1}>In Semester-1</MenuItem>
                        <MenuItem value={2}>In Semester-2</MenuItem>
                        <MenuItem value={3}>End Semester</MenuItem>
                    </Select>
                </FormControl>
                <Stack direction="row" spacing={2} justifyContent="center">
                     <Button style={{ width: "25%" }} variant="contained">Search</Button>
                     <Button style={{ width: "25%" }} variant="outlined">Reset</Button>
                   </Stack>

            </Stack>
        </Paper>
        </center>
    </div>
    
  )
}

export default Results