import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { blue, green, pink, yellow } from '@mui/material/colors';

const NoteCard = ({note, handleDelete}) => {
  return (
    <div>
      <Card 
      elevation={1}
      sx={{
        border: note.category === 'work' ? '1px solid red' : 'none'
      }}
      >
        {/* header contain all element as a props  */}
        <CardHeader
        avatar={
            <Avatar sx={{backgroundColor: note.category === 'work' ? yellow[700] : (note.category ==="money" ? green[500] : (note.category === 'todos' ? pink[500] : blue[500]))}}>
                {note.category[0].toUpperCase()}
            </Avatar>
        }
        action = {
        <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
        />
<CardContent>
    <Typography variant = "body2" color='textSecondary'>
        {note.details}
    </Typography>
</CardContent>
        
      </Card>
    </div>
  )
}

export default NoteCard
