import React,{useState}from 'react'
import NoteContext from './NoteContext'

const NoteState =(props)=>{
    const notesInitial = [
        {
          "_id": "62d14a7bd9758b7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial);
    return(
        <NoteContext.Provider  value={{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState