import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import cars from '../cars.json' // remove this

const Details = (props) => {
    const id = props.match.params.id
    const shop = props.shops.find(s => s.id == id)

    return (
        <Container maxWidth="sm" className="shop-container">
            <Paper className="shop-paper">
                <h2>{shop.name}</h2>
                
                {
                    Object.keys(shop).map((key, idx) => {
                        return <Chip label={`${key}: ${shop[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Details