import React,{useState} from 'react'
import Alert from '@mui/material/Alert'
import Grid  from '@mui/material/Grid'
import Button from '@mui/material/Button';
const AlertComponent = (props) => {
    const [showAlert,setShowAlert] = useState(false)
    const handleAlert = ()=>{
      setShowAlert(!showAlert)
      setTimeout(()=>{
        setShowAlert(false)
      },2000)
    }
    const {message} = props
  return (
    <div>
    <Grid container justifyContent="center" spacing={2} >
        <Grid item xs={4} >
            {showAlert?<Alert severity="info">{message}</Alert>:null}
        </Grid>
        
    </Grid>

    <Grid container justifyContent="center"  margin={10}>
    <Grid item xs={2} >
        
    <Button onClick={handleAlert} variant="contained" size='small' color='secondary'>Contained</Button>
    </Grid>
    </Grid>
    </div>
  )
}

export default AlertComponent
