import { connect } from "react-redux";
import AddShop from "../components/AddShop";
import { addShop } from "../redux/actions";

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShop: (shop) => dispatch(addShop(shop)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShop);