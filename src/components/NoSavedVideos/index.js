import {Component} from 'react'
import {
  ContentDiv,
  ErrorTitleEl,
  ErrorDescriptionEl,
  CTAButtonEl,
  InnerDiv,
} from './styledComponents'

class NoSavedVideos extends Component {
  render() {
    return (
      <ContentDiv>
        <InnerDiv>
          <ErrorTitleEl>No Saved Videos Found</ErrorTitleEl>
          <ErrorDescriptionEl>
            You can save your videos while watching them
          </ErrorDescriptionEl>
          <CTAButtonEl>Home</CTAButtonEl>
        </InnerDiv>
      </ContentDiv>
    )
  }
}

export default NoSavedVideos
