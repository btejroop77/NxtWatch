import {Component} from 'react'

import {
  BannerDiv,
  ButtonEl,
  ContentDiv,
  SavedVideosCardDiv,
  SavedVideosCard,
  SavedVideosTextDiv,
  VideoImage,
  VideoTitleEl,
  VideoDetailsDiv,
  ChannelPicDiv,
  ChannelPicEl,
  ChannelDetailsDiv,
  ChannelNameVerifiedDiv,
  ChannelNameEl,
  ChannelViewsDateDiv,
  ChannelViewCountEl,
  ChannelDateEl,
} from './styledComponents'

import {VscVerified} from 'react-icons/vsc'
import {BsDot} from 'react-icons/bs'

import {MdPlaylistAdd} from 'react-icons/md'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <BannerDiv>
          <ButtonEl>
            <MdPlaylistAdd size={24} color={'#393E46'} />
            Saved Videos
          </ButtonEl>
        </BannerDiv>

        <ContentDiv>
          <SavedVideosCardDiv>
            <SavedVideosCard>
              <VideoImage />
              <SavedVideosTextDiv>
                <VideoTitleEl>
                  This is how to put a title for a video to be uploaded once we
                  click.
                </VideoTitleEl>
                <VideoDetailsDiv>
                  <ChannelPicDiv>
                    <ChannelPicEl />
                  </ChannelPicDiv>
                  <ChannelDetailsDiv>
                    <ChannelNameVerifiedDiv>
                      <ChannelNameEl>Google Developers</ChannelNameEl>
                      <VscVerified size={16} color={'#393E46'} />
                    </ChannelNameVerifiedDiv>
                    <ChannelViewsDateDiv>
                      <ChannelViewCountEl>1M+ Views</ChannelViewCountEl>
                      <BsDot size={20} color={'#393E46'} />
                      <ChannelDateEl>2 years ago</ChannelDateEl>
                    </ChannelViewsDateDiv>
                  </ChannelDetailsDiv>
                </VideoDetailsDiv>
              </SavedVideosTextDiv>
            </SavedVideosCard>


<SavedVideosCard>
              <VideoImage />
              <SavedVideosTextDiv>
                <VideoTitleEl>
                  This is how to put a title for a video to be uploaded once we
                  click.
                </VideoTitleEl>
                <VideoDetailsDiv>
                  <ChannelPicDiv>
                    <ChannelPicEl />
                  </ChannelPicDiv>
                  <ChannelDetailsDiv>
                    <ChannelNameVerifiedDiv>
                      <ChannelNameEl>Google Developers</ChannelNameEl>
                      <VscVerified size={16} color={'#393E46'} />
                    </ChannelNameVerifiedDiv>
                    <ChannelViewsDateDiv>
                      <ChannelViewCountEl>1M+ Views</ChannelViewCountEl>
                      <BsDot size={20} color={'#393E46'} />
                      <ChannelDateEl>2 years ago</ChannelDateEl>
                    </ChannelViewsDateDiv>
                  </ChannelDetailsDiv>
                </VideoDetailsDiv>
              </SavedVideosTextDiv>
            </SavedVideosCard>



          </SavedVideosCardDiv>
        </ContentDiv>

        
      </>
    )
  }
}

export default SavedVideos
