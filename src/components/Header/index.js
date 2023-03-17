import {Component} from 'react'

import {BiUser} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  MainContainerDiv,
  HeaderDiv,
  LogoImageEl,
  IconsLogoutDiv,
  IconsDiv,
  IconDiv,
  SpanEl,
  UserLogoutDiv,
  LogoutDiv,
  UsernameEl,
} from './styledComponents'

const nxtWatchLogoBlack = `https://res.cloudinary.com/btejroop77/image/upload/v1678484847/NxtWatch/Group_3_ywx4m4.svg`
//const nxtWatchLogoWhite = `https://res.cloudinary.com/btejroop77/image/upload/v1678674580/NxtWatch/Group_4_cvbdwv.svg`

class Header extends Component {
  onClickLogout = () => {
    console.log('You clicked logout button')
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  render() {
    return (
      <MainContainerDiv>
        <HeaderDiv>
          <LogoImageEl src={nxtWatchLogoBlack} alt="nxtwatch logo" />
          <IconsLogoutDiv>
            <IconsDiv>
              <IconDiv>
                <FaMoon size={20} color={'#393E46'} />
              </IconDiv>
            </IconsDiv>
            <UserLogoutDiv>
              <IconDiv>
                <BiUser size={20} color={'#393E46'} />
              </IconDiv>
              <SpanEl>|</SpanEl>
              <LogoutDiv>
                <UsernameEl>Rahul Attuluri</UsernameEl>
                <IconDiv>
                  <FiLogOut
                    size={20}
                    color={'#393E46'}
                    onClick={this.onClickLogout}
                  />
                </IconDiv>
              </LogoutDiv>
            </UserLogoutDiv>
          </IconsLogoutDiv>
        </HeaderDiv>
      </MainContainerDiv>
    )
  }
}

export default withRouter(Header)
