import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  height: 90vh;
  width: 95vw;
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
`

export const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const RightContainer = styled.div`
  width: 54%;
  height: 100%;
  background-color: #25262c;
  border-radius: 8px;
  border: 1.5px solid #334155;
`

export const TextEditorHeading = styled.h1`
  color: #f8fafc;
  font-weight: 450;
  font-size: 28px;
  text-align: center;
`

export const Image = styled.img`
  width: 80%;
  align-self: center;
  margin-bottom: 30px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 5px;
`
export const BoldButton = styled.button`
  font-weight: 400;
  background-color: transparent;
  font-size: 18px;
  width: 30px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
  border: none;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`

export const Item = styled.li`
  list-style: none;
`

export const ItalicButton = styled.button`
  font-weight: 400;
  background-color: transparent;
  font-size: 20px;
  width: 30px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
  font-style: italic;
  border: none;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`

export const UnderLineButton = styled.button`
  font-weight: 400;
  background-color: transparent;
  font-size: 18px;
  width: 30px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
  text-decoration: underline;
  border: none;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`

export const Line = styled.hr`
  border: 1px solid #334155;
`

export const Field = styled.textarea`
  background-color: transparent;
  height: 88%;
  width: 100%;
  color: #f1f5f9;
  padding: 20px;
  font-size: 15px;
  outline: none;
  border: none;
  font-weight: ${props => props.isBold};
  font-style: ${props => props.isItalic};
  text-decoration: ${props => props.isUnderline};
`
