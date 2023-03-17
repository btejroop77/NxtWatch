import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
  height: auto;
  padding: 2px;
  height: 80vh;
`

export const TopContentDiv = styled.div`
  border: 1px solid red;
  padding: 4px;
  width: 180px;
`

export const BottomContentDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 180px;
  padding: 4px;
`

export const HeadingEl = styled.p`
  border: 1px solid red;
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 14px;
`

export const SocialDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 4px;
`

export const ButtonEl = styled.button`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #393e46;
  border-radius: 8px;
  padding: 10px;
  width: 180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
  background-color: transparent;
`
