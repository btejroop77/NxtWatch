import {Component} from 'react'

import {
  VideoCardDiv,
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

import {BsDot} from 'react-icons/bs'
//import { VscVerifiedFilled } from "react-icons/vsc";
import {VscVerified} from 'react-icons/vsc'

//Implement Outlineverifeid and verified based on number of subscribers.

class VideoCard extends Component {
  render() {
    return (
      <VideoCardDiv>
        <VideoImage />
        <VideoTitleEl>
          This is how to put a title for a video to be uploaded once we click.
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
      </VideoCardDiv>
    )
  }
}

export default VideoCard
