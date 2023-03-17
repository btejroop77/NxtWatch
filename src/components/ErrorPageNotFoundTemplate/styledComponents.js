import styled from 'styled-components'

export const ContentDiv = styled.div`
  border: 1px solid violet;
  padding: 4px;
  width: 98%;
  flex-wrap: wrap;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px solid red;
`

export const ErrorTitleEl = styled.p`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 500;
  font-size: 20px;
`
export const ErrorDescriptionEl = styled.p`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 16x;
`
export const CTAButtonEl = styled.button`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 18x;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #393e46;
  background-color: transparent;
  margin-left: 8px;
`
