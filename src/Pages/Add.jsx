import { Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'
import "./Masonry.css"
const Add = () => {
  const [notes, setNotes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then( data => setNotes(data))
    // console.log('notes', notes)
  },[])

  // aam ekteba hon l2n hon el state elli fiya ldata (need to delete from json file && from web page!!)
const handleDelete = async (id) => {

  await fetch('http://localhost:8000/notes/' + id, {
    method : 'DELETE'
  })
  const newNotes = notes.filter(note => note.id != id)
  setNotes(newNotes)
}



const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
};

return (
  <Container>
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {notes.map(note => (
        <div key={note.id}>
          <NoteCard note={note} handleDelete={handleDelete} />
        </div>
      ))}
    </Masonry>
  </Container>
)

  return (
    
   <Container
  //  maxWidth="xl"
  //  sx={{marginTop:"20px"}}
  //  fixed
  // disableGutters
   >


      <Grid container spacing={3}>
      {notes.map(note => (
         <Grid  key={note.id} item xs={12} sm={6} md={4}>
         <NoteCard note= {note} handleDelete={handleDelete}/>
       </Grid>
      ))}</Grid>
    </Container>
  )
}

export default Add
