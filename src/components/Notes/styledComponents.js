import styled from 'styled-components'

export const NotesMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const NotesContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 36px;
  color: #4c63b6;
  text-align: center;
  font-weight: 500;
`
export const NotesCardContainer = styled.form`
  width: 90%;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const TitleInput = styled.input`
  padding: 8px 15px 8px 15px;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #475569;
  font-family: 'Roboto';
  margin-bottom: 30px;
  font-weight: 500;
`
export const TextAreaInput = styled.textarea`
  padding: 8px 15px 8px 15px;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #475569;
  font-family: 'Roboto';
`
export const AddButton = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: #4c63b6;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  align-self: flex-end;
  margin-top: 20px;
`

export const NotesListContainer = styled.ul`
  padding-left: 0px;
  width: 90%;

  display: flex;
  flex-wrap: wrap;
`

export const NoImageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const NoImage = styled.img`
  width: 30%;
`

export const NoNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #334155;
  font-weight: 500;
  margin-bottom: 0px;
  text-align: center;
`
export const NoNotesDes = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #334155;
  font-weight: 500;
  text-align: center;
`
