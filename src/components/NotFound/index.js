import {Component} from 'react'

import {
  ContentDiv,
  ErrorTitleEl,
  ErrorDescriptionEl,
  CTAButtonEl,
  InnerDiv,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <ContentDiv>
        <InnerDiv>
          <ErrorTitleEl>Page Not Found</ErrorTitleEl>
          <ErrorDescriptionEl>
            The page you requested could not be found.
          </ErrorDescriptionEl>
          <CTAButtonEl>Home</CTAButtonEl>
        </InnerDiv>
      </ContentDiv>
    )
  }
}

export default NotFound
