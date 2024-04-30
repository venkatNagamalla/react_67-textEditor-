import {Component} from 'react'

import {
  MainContainer,
  TextEditorContainer,
  LeftContainer,
  RightContainer,
  TextEditorHeading,
  Image,
  BoldButton,
  ButtonsContainer,
  ItalicButton,
  UnderLineButton,
  Line,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  render() {
    const {bold} = this.state
    return (
      <MainContainer>
        <TextEditorContainer>
          <LeftContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ButtonsContainer>
              <BoldButton
                bold={bold}
                onClick={() =>
                  this.setState(prevState => ({bold: !prevState.bold}))
                }
                type="button"
              >
                B
              </BoldButton>
              <ItalicButton type="button">i</ItalicButton>
              <UnderLineButton type="button">U</UnderLineButton>
            </ButtonsContainer>
            <Line />
          </RightContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
