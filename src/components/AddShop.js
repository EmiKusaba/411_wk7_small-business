import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import Map from './Map'

class AddShop extends Component {
  state = {
    Id: '',
    Name: '',
    Phone: '',
    Hours: '',
    Address: '',
    Description: '',
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
          <h4>Logged in as: {this.props.user.username}</h4>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.id}
              name="Id"
              label="Id"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.name}
              name="Name"
              label="Name"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.phone}
              name="Phone"
              label="Phone"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.hours}
              name="Hours"
              label="Hours"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.address}
              name="Address"
              label="Address"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.description}
              name="Description"
              label="Description"
              type="text" />

            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Save</Button>

          </form>
        </Container>
      </div>
    );
  }
}


export default AddShop;