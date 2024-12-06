import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack} from '@mui/material'
import React from 'react'

function Attendance() {
  return (
    <div ><center><h1>Attendance Register</h1></center>
   <center> <Paper elevation={12} style={{width:"400px", padding:"35px",backgroundColor:"white"}}>
            <Stack spacing={3}>
                <FormControl>
                    <InputLabel variant="filled">Select Academic Year</InputLabel>
                    <Select>
                        <MenuItem value={1}>2023-2024</MenuItem>
                        <MenuItem value={2}>2022-2023</MenuItem>
                        <MenuItem value={3}>2021-2022</MenuItem>
                        <MenuItem value={4}>2020-2021</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel variant="filled"> Sem </InputLabel>
                    <Select>
                        <MenuItem value={1}>Odd</MenuItem>
                        <MenuItem value={2}>Even</MenuItem>
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

export default Attendance