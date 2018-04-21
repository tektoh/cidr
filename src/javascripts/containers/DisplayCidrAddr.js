import { connect } from 'react-redux'
import CidrAddr from '../components/CidrAddr'

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props,
  }
}

export default connect(
  mapStateToProps
)(CidrAddr)
