import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  NotesMainContainer,
  NotesContainer,
  NotesHeading,
  NotesCardContainer,
  TitleInput,
  TextAreaInput,
  AddButton,
  NotesListContainer,
  NoImageContainer,
  NoImage,
  NoNotesHeading,
  NoNotesDes,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, changeTitle] = useState('')
  const [takeNotes, changeNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    changeTitle(event.target.value)
  }

  const onChangeNote = event => {
    changeNotes(event.target.value)
  }

  const onClickAdd = () => {
    const newNotes = {
      id: uuidv4(),
      title,
      takeNotes,
    }
    setNotesList(prevState => [...prevState, newNotes])
    changeTitle('')
    changeNotes('')
  }

  return (
    <NotesMainContainer>
      <NotesContainer>
        <NotesHeading>Notes</NotesHeading>
        <NotesCardContainer onSubmit={onClickAdd}>
          <TitleInput
            value={title}
            placeholder="Title"
            onChange={onChangeTitle}
          />
          <TextAreaInput
            value={takeNotes}
            placeholder="Take a Note..."
            onChange={onChangeNote}
          />
          <AddButton type="submit">Add</AddButton>
        </NotesCardContainer>

        {notesList.length <= 0 ? (
          <NoImageContainer>
            <NoImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <NoNotesDes>Notes you add will appear here</NoNotesDes>
          </NoImageContainer>
        ) : (
          <NotesListContainer>
            {notesList.map(eachItem => (
              <NoteItem key={eachItem.id} notesItems={eachItem} />
            ))}
          </NotesListContainer>
        )}
      </NotesContainer>
    </NotesMainContainer>
  )
}

export default Notes
