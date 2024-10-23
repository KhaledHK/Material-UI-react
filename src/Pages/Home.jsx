import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';


const Home = () => {
const [title, setTitle] = useState("")
const [details, setDetails] = useState("")
const [titleError, setTitleError] = useState(false)
const [detailsError, setDetailsError] = useState(false)
const [category, setCategory] = useState('money')

const navigate = useNavigate();
const handleSubmit = (e) => {
   e.preventDefault()
setTitleError(false);
setDetailsError(false);
   if(title == ''){
      setTitleError(true)
   }
   if(details == ''){
      setDetailsError(true)
   }
   if(title && details) {
      console.log(title , details, category);
      fetch('http://localhost:8000/notes', {
         method: 'POST',
         headers:{"Content-type": "application/json"},
         body: JSON.stringify({title, details, category})
      }).then(() => navigate('/'))
   }
}

  return (
    <Container>
   <Typography
   variant ="h6"
   component="h2"
   gutterBottom
   color = "textSecondary"
   >
      
    Create a New Note
   </Typography>

{/* no defaut validate . auto complet off */}
<form noValidate autoComplete='off' onSubmit={handleSubmit}>

<TextField
onChange={(e)=> setTitle(e.target.value)}
label = "Note title"
variant='outlined'
color='secondary'
fullWidth
required
sx= {{marginBlock:"20px", display:"block"}}
error={titleError}
/>

<TextField
onChange={(e)=> setDetails(e.target.value)}
label = "Details"
variant='outlined'
color='secondary'
multiline
rows={4}
fullWidth
required
sx= {{marginBlock:"20px", display:"block"}}
error={detailsError}
/>
<FormControl
sx= {{marginBlock:"20px", display:"block"}}
>
<FormLabel>Note Category</FormLabel>
<RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}> 
   {/* <Radio value="hello"/>
   <Radio value="goodby"/> */}
   <FormControlLabel control= {<Radio/>} label="Money" value="money"/>
   <FormControlLabel control= {<Radio/>} label="Todos" value="todos"/>
   <FormControlLabel control= {<Radio/>} label="Reminders" value="reminders"/>
   <FormControlLabel control= {<Radio/>} label="Work" value="work"/>
</RadioGroup>
</FormControl>
 <Button
   onClick={()=>console.log('clicked submit')}
   type='submit'
   color='secondary'
   variant='contained'
   endIcon={<KeyboardArrowRightIcon/>}

   >
      Submit
   </Button>
</form>

  
    </Container>
  )
}

export default Home
