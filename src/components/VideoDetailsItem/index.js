import {Component} from 'react'

import {
  VideoDetailsBackground,
  VideoTopDiv,
  TitleEl,
  ViewsIconDiv,
  IconsDiv,
  ButtonEl,
  VideoDetailsDiv,
  ChannelPicDiv,
  ChannelPicEl,
  ChannelDetailsDiv,
  ChannelNameVerifiedDiv,
  ChannelNameEl,
  ChannelViewsDateDiv,
  ChannelViewCountEl,
  ChannelDateEl,
  DescriptionEl,
} from './styledComponents'

import {BsDot} from 'react-icons/bs'

import {MdPlaylistAdd} from 'react-icons/md'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'

//import { AiFillLike } from "react-icons/ai";
//import { AiFillDislike } from "react-icons/ai";

class VideoDetailsItem extends Component {
  render() {
    return (
      <VideoDetailsBackground>
        <VideoTopDiv>
          <TitleEl>Gooogle Developers Conference | GDC - 2023</TitleEl>
        </VideoTopDiv>

        <ViewsIconDiv>
          <ChannelViewsDateDiv>
            <ChannelViewCountEl>1M+ Views</ChannelViewCountEl>
            <BsDot size={20} color={'#393E46'} />
            <ChannelDateEl>2 years ago</ChannelDateEl>
          </ChannelViewsDateDiv>

          <IconsDiv>
            <ButtonEl>
              <AiOutlineLike size={20} color={'#393E46'} />
              Like
            </ButtonEl>
            <ButtonEl>
              <AiOutlineDislike size={20} color={'#393E46'} />
              Dislike
            </ButtonEl>
            <ButtonEl>
              <MdPlaylistAdd size={20} color={'#393E46'} />
              Save
            </ButtonEl>
          </IconsDiv>
        </ViewsIconDiv>

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

        <DescriptionEl>
          The place where you can find the talent community to step into careers
        </DescriptionEl>
      </VideoDetailsBackground>
    )
  }
}

export default VideoDetailsItem
