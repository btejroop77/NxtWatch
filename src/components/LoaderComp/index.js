import Loader from 'react-loader-spinner'

import {LoaderDiv} from './styledComponents'

const LoaderComp = () => (
  <>
    <LoaderDiv>
      <Loader type="Bars" color="#929AAB" height={50} width={50} />
    </LoaderDiv>
  </>
)

export default LoaderComp
