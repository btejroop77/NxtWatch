import {Component} from 'react'

import {
  ContentDiv,
  ErrorTitleEl,
  ErrorDescriptionEl,
  CTAButtonEl,
  InnerDiv,
} from './styledComponents'

class ErrorPageNotFoundTemplate extends Component {
  render() {
    return (
      <ContentDiv>
        <InnerDiv>
          <ErrorTitleEl>No Search Results Found</ErrorTitleEl>
          <ErrorDescriptionEl>
            Try different keywords or remove Search filter{' '}
          </ErrorDescriptionEl>
          <CTAButtonEl>Retry</CTAButtonEl>
        </InnerDiv>
      </ContentDiv>
    )
  }
}

export default ErrorPageNotFoundTemplate
