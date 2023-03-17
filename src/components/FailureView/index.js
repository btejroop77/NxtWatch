import {Component} from 'react'
import {
  ContentDiv,
  ErrorTitleEl,
  ErrorDescriptionEl,
  CTAButtonEl,
  InnerDiv,
} from './styledComponents'

class FailureView extends Component {
  render() {
    return (
      <ContentDiv>
        <InnerDiv>
          <ErrorTitleEl>Oops! Something went Wrong</ErrorTitleEl>
          <ErrorDescriptionEl>
            We are having some trouble having your request
          </ErrorDescriptionEl>
          <CTAButtonEl>Retry</CTAButtonEl>
        </InnerDiv>
      </ContentDiv>
    )
  }
}

export default FailureView
