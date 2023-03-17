import styled from 'styled-components'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  border: 1px solid red;
  height: fit-content;
`

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid blue;
  margin: 8px;
  width: 100%;
  padding: 4px;
`

export const SearchInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #393e46;
  border-radius: 8px;
  background-color: transparent;
`

export const SearchInputEl = styled.input`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 18x;
  width: 180px;
  border-radius: 8px;
  padding: 10px;
  //border: 1px solid #393e46;
  border: none;
  background-color: transparent;
`

export const ButtonEl = styled.span`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 18x;
  border-radius: 8px;
  padding: 10px;
  //border: 1px solid #393e46;
  background-color: transparent;
`

export const HeadingEl = styled.h1`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 20px;
  border: 1px solid #393e46;
  border-radius: 8px;
  padding: 10px;
  margin-right: 4px;
`

export const ContentDiv = styled.div`
  border: 1px solid violet;
  padding: 4px;
  width: auto;
  flex-wrap: wrap;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  margin-right: 4px;
`
