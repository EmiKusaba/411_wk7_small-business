import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import Map from "./Map";

class Details extends React.Component {
  render() {
    const id = this.props.match.params.id
    const shop = this.props.shops.find(s => s.id == id)

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
        <Map address={shop.address} zoom={16} />
      </Container>
    )
  }
}

export default Details;