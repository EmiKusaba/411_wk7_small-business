import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import Map from "./Map";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geocode: null,
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const shop = this.props.shops.find(s => s.id == id)
    const address = shop.address;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=US&access_token=pk.eyJ1IjoiZW1pa3VzYWJhIiwiYSI6ImNrOWxudHVhaDBlNDIzZnFzZHk5YTlmeG8ifQ.tnFptw0938NlNdsem5LuRA`
    fetch(url)
    .then(res => res.json())
    .then(response => {
      this.setState({
        geocode: response,
      })
    });
  }

  render() {
    const id = this.props.match.params.id
    const shop = this.props.shops.find(s => s.id == id)
    const geocode = this.state.geocode;

    return (
      <Container maxWidth="sm" className="shop-container">
        <Paper className="shop-paper">
          <h2>{shop.name}</h2>

          {
            Object.keys(shop).map((key, idx) => {
              return <h3>{`${key}: ${shop[key]}`}</h3>
            })
          }
        </Paper>
        {
          geocode ? (
            <Map lng={geocode.features[0].center[0]} lat={geocode.features[0].center[1]} zoom={16} />
          ) : null
        }
        </Container>
    )
  }
}

export default Details;