import React from "react";
import  { Avatar, Button, Grid,Paper, TextField } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
const UserForm = () => {
    const paperStyling = {
        padding:20,height:'70vh',width:300,margin:"20px auto"
    }
    const avatarStyle = {
        backgroundColor:"#B05A7A"
    }

    const buttonStyle ={
        margin:"1.5rem auto"
    }
  
  return (
        <Grid>
            <Paper elevation={10} style={paperStyling}>
            <Grid align="center">
            <Avatar style={avatarStyle}><PersonIcon/></Avatar>    
            <h1> sign in</h1>
            </Grid>
            <TextField label="Username" variant="standard" placeholder="Enter Your Username" fullWidth></TextField>
            <TextField label="Email" variant="standard" placeholder="Enter Your Email" type={"email"} fullWidth></TextField>
            <Button style={buttonStyle} type="submit" variant="contained" fullWidth>Submit</Button>
            </Paper>
        </Grid>
  );
};

export default UserForm;
