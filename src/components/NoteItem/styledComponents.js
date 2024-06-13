import styled from 'styled-components'

export const NotesListItemContainer = styled.li`
  list-style-type: none;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 20px;
  }
`

export const ListItemHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #334155;
  font-weight: 500;
`

export const ListItemDes = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #aab8c8;
  font-weight: 500;
`
