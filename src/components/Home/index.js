import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
//import LoaderComp from '../LoaderComp'

import {
  MainDiv,
  HomeDiv,
  SearchInputDiv,
  SearchInputEl,
  ButtonEl,
} from './styledComponents'

//import FailureView from '../FailureView'

import Navbar from '../Navbar'

//HomeDiv,
//import VideoCard from '../VideoCard' Add ContentDiv( ContentDiv,)
//import Banner from '../Banner'
//import SavedVideos from '../SavedVideos'
//import Trending from '../Trending'
//import ErrorPageNotFoundTemplate from '../ErrorPageNotFoundTemplate'

import {BiSearch} from 'react-icons/bi'
import Header from '../Header'
//import NotFound from '../NotFound'
//import NoSavedVideos from '../NoSavedVideos'
//import FailureView from '../FailureView'
//import VideoDetailsItem from '../VideoDetailsItem'
//import Gaming from '../Gaming'
//import Login from '../Login'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <HomeDiv>
          <Navbar />
          <MainDiv>
            <SearchInputDiv>
              <SearchInputEl type="search" placeholder="Search for Videos" />
              <ButtonEl>
                <BiSearch />
              </ButtonEl>
            </SearchInputDiv>
          </MainDiv>
        </HomeDiv>
      </>
    )
  }
}

export default Home

/*<ContentDiv>
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </ContentDiv>*/
