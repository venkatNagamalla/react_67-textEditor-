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
  Field,
  Item,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  render() {
    const {bold, italic, underline} = this.state

    const isBold = bold ? 'bold' : 'normal'

    const isItalic = italic ? 'italic' : 'normal'
    const isUnderline = underline ? 'underline' : 'normal'

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
              <Item>
                <BoldButton
                  data-testid="bold"
                  bold={bold}
                  onClick={() =>
                    this.setState(prevState => ({bold: !prevState.bold}))
                  }
                  type="button"
                >
                  B
                </BoldButton>
              </Item>
              <Item>
                <ItalicButton
                  data-testid="italic"
                  onClick={() =>
                    this.setState(prevState => ({italic: !prevState.italic}))
                  }
                  italic={italic}
                  type="button"
                >
                  i
                </ItalicButton>
              </Item>
              <Item>
                <UnderLineButton
                  data-testid="underline"
                  onClick={() =>
                    this.setState(prevState => ({
                      underline: !prevState.underline,
                    }))
                  }
                  underline={underline}
                  type="button"
                >
                  U
                </UnderLineButton>
              </Item>
            </ButtonsContainer>
            <Line />
            <Field
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              defaultValue=""
            />
          </RightContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
