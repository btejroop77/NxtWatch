import {Component} from 'react'

import {
  BannerDiv,
  ButtonEl,
  ContentDiv,
  VideoCardDiv,
  VideoImage,
  VideoDetailsDiv,
  ChannelPicDiv,
  ChannelPicEl,
  ChannelDetailsDiv,
  ChannelNameVerifiedDiv,
  ChannelNameEl,
  ChannelViewsDateDiv,
  ChannelViewCountEl,
} from './styledComponents'

import {IoGameController} from 'react-icons/io5'
//import {VscVerified} from 'react-icons/vsc'
//import {BsDot} from 'react-icons/bs'

class Gaming extends Component {
  render() {
    return (
      <>
        <BannerDiv>
          <ButtonEl>
            <IoGameController size={24} color={'#393E46'} />
            Gaming
          </ButtonEl>
        </BannerDiv>

        <ContentDiv>
          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>

          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>

          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>

          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>

          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>

          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>

          <VideoCardDiv>
            <VideoImage />
            <VideoDetailsDiv>
              <ChannelPicDiv>
                <ChannelPicEl />
              </ChannelPicDiv>
              <ChannelDetailsDiv>
                <ChannelNameVerifiedDiv>
                  <ChannelNameEl>Google Developers</ChannelNameEl>
                </ChannelNameVerifiedDiv>
                <ChannelViewsDateDiv>
                  <ChannelViewCountEl>20 Watching</ChannelViewCountEl>
                </ChannelViewsDateDiv>
              </ChannelDetailsDiv>
            </VideoDetailsDiv>
          </VideoCardDiv>
        </ContentDiv>
      </>
    )
  }
}

export default Gaming
