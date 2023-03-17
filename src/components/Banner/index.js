import {Component} from 'react'

import {
  BannerDiv,
  BannerInfoDiv,
  BannerLogoEl,
  BannerTitleEl,
  BannerCTA,
  BannerBackdropDiv,
  BannerBackdrop,
  CloseButtonEl,
} from './styledComponents'

import {IoClose} from 'react-icons/io5'

//const nxtWatchLogoBlack = `https://res.cloudinary.com/btejroop77/image/upload/v1678484847/NxtWatch/Group_3_ywx4m4.svg`
const nxtWatchLogoWhite = `https://res.cloudinary.com/btejroop77/image/upload/v1678674580/NxtWatch/Group_4_cvbdwv.svg`

const bannerBackdrop = `https://res.cloudinary.com/btejroop77/image/upload/v1678675916/NxtWatch/Group_5_gvqoea.svg`

class Banner extends Component {
  render() {
    return (
      <BannerDiv>
        <BannerInfoDiv>
          <BannerLogoEl src={nxtWatchLogoWhite} alt="logo" />
          <BannerTitleEl>
            Buy NxtWatch Premium prepaid plans with UPI
          </BannerTitleEl>
          <BannerCTA>Get it now</BannerCTA>
        </BannerInfoDiv>

        <BannerBackdropDiv>
          <BannerBackdrop src={bannerBackdrop} alt="banner backdrop" />
        </BannerBackdropDiv>

        <CloseButtonEl>
          <IoClose size={20} color={'#d9d9d9'} />
        </CloseButtonEl>
      </BannerDiv>
    )
  }
}

export default Banner
