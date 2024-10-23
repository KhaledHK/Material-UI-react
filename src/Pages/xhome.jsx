import React from 'react'
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from '@emotion/styled';

const CustomButton = styled(Button)({
   fontSize: 60,
   backgroundColor: 'red',
   '&:hover':{
      background: 'blue'
   }
 });


const Home = () => {
  return (
    <Container>
   <Typography
   variant ="h6"
   component="h2"
   gutterBottom
   color = "textSecondary"
   // sx= {{marginBottom:"30px", textDecoration:"underline"}}
   >
    Create a New Note
   </Typography>
   <Button
   onClick={()=>console.log('clicked submit')}
   type='submit'
   color='secondary'
   variant='contained'
   sx={{ fontSize: 60, backgroundColor: 'violet' }}
   startIcon={<SendIcon/>}
   endIcon={<KeyboardArrowRightIcon/>}
   disableElevation
   >
      Submit
   </Button>
   {/* <CustomButton
   onClick={()=>console.log('clicked submit')}
   type='submit'
   color='secondary'
   variant='contained'
   sx={{ fontSize: 60, backgroundColor: 'violet' }}
   // startIcon={<SendIcon/>}
   endIcon={<KeyboardArrowRightIcon/>}
//    disableElevation
   >
submit
   </CustomButton> */}

{/* iconns */}
{/* <br/>
<AcUnitOutlinedIcon />
<AcUnitOutlinedIcon color= "secondary" fontSize="large"/>
<AcUnitOutlinedIcon color= "action" fontSize="small"/>
<AcUnitOutlinedIcon color= "error" fontSize="large"/>
<AcUnitOutlinedIcon color= "disabled" fontSize="large"/> */}
    </Container>
  )
}

export default Home