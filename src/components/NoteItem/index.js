import {
  NotesListItemContainer,
  ListItemHeading,
  ListItemDes,
} from './styledComponents'

const NoteItem = props => {
  const {notesItems} = props
  const {title, takeNotes} = notesItems

  return (
    <NotesListItemContainer>
      <ListItemHeading>{title}</ListItemHeading>
      <ListItemDes>{takeNotes}</ListItemDes>
    </NotesListItemContainer>
  )
}

export default NoteItem
