import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
    return {
        shops: state.shops
    }
}

export default connect(mapStateToProps)(Details)