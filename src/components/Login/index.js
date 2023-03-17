import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {BsArrowRight} from 'react-icons/bs'

import {
  MainDiv,
  LeftContainer,
  FormContainer,
  LogoDiv,
  InputDiv,
  LogoImageEl,
  InputEl,
  ShowPasswordDiv,
  CheckboxEl,
  LabelEl,
  ButtonEl,
  IconEl,
  ErrorMsgEl,
} from './styledComponents'

const nxtWatchLogo = `https://res.cloudinary.com/btejroop77/image/upload/v1678484847/NxtWatch/Group_3_ywx4m4.svg`

class Login extends Component {
  state = {
    username: '',
    password: '',
    visibility: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 7, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(loginApiUrl, options)
    const data = response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      visibility,
      showSubmitError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainDiv>
        <LeftContainer></LeftContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LogoDiv>
            <LogoImageEl src={nxtWatchLogo} alt="nxtwatch logo" />
          </LogoDiv>
          <InputDiv>
            <InputEl
              placeholder="username"
              type="text"
              value={username}
              onChange={this.onChangeUsername}
            />
          </InputDiv>
          <InputDiv>
            <InputEl
              placeholder="password"
              type={visibility ? 'text' : 'password'}
              value={password}
              onChange={this.onChangePassword}
            />
          </InputDiv>
          <ShowPasswordDiv>
            <CheckboxEl
              type="checkbox"
              id="checkbox"
              onChange={this.showPassword}
            />
            <LabelEl htmlFor="checkbox" cursor="pointer">
              show password
            </LabelEl>
          </ShowPasswordDiv>
          <ButtonEl>
            Login{' '}
            <IconEl>
              <BsArrowRight />
            </IconEl>
          </ButtonEl>
          {showSubmitError && <ErrorMsgEl>*{errorMsg}</ErrorMsgEl>}
        </FormContainer>
      </MainDiv>
    )
  }
}

export default Login
