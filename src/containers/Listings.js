import { connect } from 'react-redux'
import Listings from '../components/Listings'
// import { removeCar } action here
import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        shops: state.shops
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)