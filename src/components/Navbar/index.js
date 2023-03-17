import {Component} from 'react'

import {
  MainDiv,
  TopContentDiv,
  BottomContentDiv,
  HeadingEl,
  SocialDiv,
  ButtonEl,
} from './styledComponents'

import {MdHome} from 'react-icons/md'
import {ImFire} from 'react-icons/im'
import {IoGameController} from 'react-icons/io5'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

class Navbar extends Component {
  render() {
    return (
      <MainDiv>
        <TopContentDiv>
          <ButtonEl>
            <MdHome size={24} color={'#393E46'} />
            Home
          </ButtonEl>
          <ButtonEl>
            <ImFire size={20} color={'#393E46'} />
            Trending
          </ButtonEl>
          <ButtonEl>
            <IoGameController size={24} color={'#393E46'} />
            Gaming
          </ButtonEl>
          <ButtonEl>
            <MdPlaylistAdd size={24} color={'#393E46'} />
            Saved Videos
          </ButtonEl>
        </TopContentDiv>
        <BottomContentDiv>
          <HeadingEl>Contact Us</HeadingEl>
          <SocialDiv>
            <FaFacebookF size={20} color={'#393E46'} />
            <FaTwitter size={20} color={'#393E46'} />
            <FaLinkedin size={20} color={'#393E46'} />
          </SocialDiv>
          <HeadingEl>
            Enjoy now to see your channels and recommendations
          </HeadingEl>
        </BottomContentDiv>
      </MainDiv>
    )
  }
}

export default Navbar
