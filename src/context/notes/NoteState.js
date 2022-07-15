import React,{useState}from 'react'
import NoteContext from './NoteContext'

const NoteState =(props)=>{
    const notesInitial = [
        {
          "_id": "62d14a7bd9758b7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,",
          "description": "Hello I am a Note Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a ex. Repellendus quia quaerat in natus dignissimos hic animi ea pariatur, cumque maiores ratione iure beatae adipisci, est culpa. Iusto delectus alias architecto aspernatur!",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd9758bds7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd9sd75fs8b7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd975sdf8b7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title ",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd9758basdf7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd9758b7dsf705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd97sdf58b7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd9af758b7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
        {
          "_id": "62d14a7bd9758sdfb7705ff2fb3",
          "user": "62cc690a1bb5592e5effa14e",
          "title": "My Title",
          "description": "Hello I am a Note",
          "tag": "personal",
          "date": "2022-07-15T11:07:39.949Z",
          "__v": 0
        },
      ]
      const [notes, setnotes] = useState(notesInitial);
    return(
        <NoteContext.Provider  value={{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState