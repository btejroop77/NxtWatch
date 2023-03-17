import styled from 'styled-components'

export const BannerDiv = styled.div`
  //border: 1px solid blue;
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);
  padding: 8px;
  border-radius: 8px;
  max-height: 300px;
  margin-top: 2px;
  margin-bottom: 2px;
  border: 1px solid #393e46;
`

export const ButtonEl = styled.button`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #393e46;
  border-radius: 8px;
  padding: 10px;
  width: 180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
  background-color: transparent;
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
  //height:100vh
`

export const VideoCardDiv = styled.div`
  //border: 1px solid blue;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  margin-bottom: 4px;
`

export const VideoImage = styled.img`
  height: 180px;
  border-radius: 8px;
  border: 1px solid #393e46;
  width: 280px;
  margin-bottom: 4px;
`
/*
export const VideoTitleEl = styled.h1`
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 14px;
  max-width: 280px;
  max-height: 30px;
  //border: 1px solid red;
  padding: 2px;
  text-align: flex-start;
`*/

export const VideoDetailsDiv = styled.div`
  border: 1px solid #393e46;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  padding: 2px;
  justify-content: flex-start;
  align-items: center;
  max-width: 280px;
`

export const ChannelPicDiv = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid #393e46;
  border-radius: 8px;
  margin-right: 4px;
`

export const ChannelPicEl = styled.img``

export const ChannelDetailsDiv = styled.div`
  border-radius: 8px;
  //border: 1px solid #393e46;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
`

export const ChannelNameVerifiedDiv = styled.div`
  //border: 1px solid green;
  //border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20px;
`

export const ChannelNameEl = styled.p`
  //border: 1px solid black;
  border-radius: 8px;
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 12px;
  margin-right: 4px;
`

export const ChannelViewsDateDiv = styled.div`
  //border: 1px solid violet;
  //border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20px;
`

export const ChannelViewCountEl = styled.p`
  //border: 1px solid black;
  border-radius: 8px;
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 12px;
`
export const ChannelDateEl = styled.p`
  //border: 1px solid black;
  border-radius: 8px;
  font-family: 'Urbanist', sans-serif;
  color: #393e46;
  font-weight: 400;
  font-size: 12px;
`
