import { connect } from 'react-redux'
import Listings from '../components/Listings'
// import { removeCar } action here
import { deleteShop } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        shops: state.shops
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        deleteShop: (index) => dispatch(deleteShop(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)