import styled from 'styled-components'

export const BannerDiv = styled.div`
  //border: 1px solid blue;
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #393e46;
  padding: 8px;
  border-radius: 8px;
  max-height: 300px;
  margin-top: 2px;
  margin-bottom: 2px;
`
export const BannerInfoDiv = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4px;
  width: 30%;
`

export const BannerLogoEl = styled.img``

export const BannerTitleEl = styled.p`
  font-family: 'Urbanist', sans-serif;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 16x;

  margin-left: 8px;
  //border: 1px solid red;
`
export const BannerCTA = styled.button`
  font-family: 'Urbanist', sans-serif;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 18x;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  background-color: transparent;
  margin-left: 8px;
`

export const BannerBackdropDiv = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
`
export const BannerBackdrop = styled.img``

export const CloseButtonEl = styled.button`
  height: 24px;
  width: 24px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`
