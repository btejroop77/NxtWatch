import styled from 'styled-components'

export const MainDiv = styled.div`
 display: flex;
 flex-direction: row;
 height: 100vh;
 align-items: center;
 justify-content:center
 justify-content: space-between;
 background-color: #eeeeee;
 @media screen and (max-width: 768px) {
   background-color: #393e46;
   border-radius: 0px;
 }
`

export const LeftContainer = styled.div`
  background-color: #393e46;
  height: 100vh;
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FormContainer = styled.form`
  align-self: center;
  border: 1px solid #929aab;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  padding: 20px;
  margin: auto;
  padding: 20px;
  background-color: #eeeeee;
`

export const LogoDiv = styled.div`
  //border: 1px solid #393e46;
  //border-radius: 8px;
  width: auto;
  margin-bottom: 6px;
`

export const LogoImageEl = styled.img`
  height: 120px;
  width: 120px;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 6px;
`

export const InputEl = styled.input`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 20px;
  border: 1px solid #393e46;
  border-radius: 8px;
  padding: 10px;
  background-color: #eeeeee;
`

export const ShowPasswordDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  //border: 1px solid #393e46;
  border-radius: 8px;
  margin-bottom: 50px;
`

export const CheckboxEl = styled.input`
  background-color: #393e46;
  margin-right: 6px;
`

export const LabelEl = styled.label`
  font-family: 'Urbanist', sans-serif;
`

export const ButtonEl = styled.button`
  background-color: #393e46;
  border-radius: 8px;
  font-family: 'Urbanist', sans-serif;
  font-weight: 500;
  padding: 10px;
  text-decoration-line: underline;
  color: #eeeeee;
  outline: none;
  cursor: pointer;
  width: 100%;
  text-align: start;
  font-size: 20px;
  border: none;
  font-style: normal;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const IconEl = styled.div`
  //border: 1px solid red;
`

export const ErrorMsgEl = styled.p`
  font-family: 'Urbanist', sans-serif;
  color: red;
`
