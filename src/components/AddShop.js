import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class AddShop extends Component {
  state = {
    id: '',
    name: '',
    phone: '',
    hour: '',
    address: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...this.state };
    this.props.addShop(payload); 
    this.props.history.push("/listings");
  }

  onChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render() {
    return (
      <div className="LogIn">
        <Container maxWidth="sm">
          <form className="Add-form" onSubmit={this.handleSubmit}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.id}
              name="id"
              label="id"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.name}
              name="name"
              label="Name"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.phone}
              name="phone"
              label="Phone"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.hour}
              name="hour"
              label="Hour"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.address}
              name="address"
              label="Address"
              type="text" />
            <Button
              type="submit"
              className="save-button"
              variant="contained"
              color="primary">Save</Button>
          </form>
        </Container>
      </div>
    );
  }
}


export default AddShop;