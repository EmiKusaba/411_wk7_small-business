import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

// import AddCar from '../containers/AddCar'
 
const Listings = (props) => {
    return (
        <Container maxWidth="lg" className="shop-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
                
                {/* <AddCar carTotal={props.cars.length} /> */}
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Discription</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.shops.map((shop, idx) => (
                    <TableRow key={shop.id}>
                        <TableCell component="th" scope="row">
                            {shop.id}
                        </TableCell>
                        <TableCell style={{"color": "blue", "text-decoration": "underline"}}><Link to={`/shop/${shop.id}`}>{shop["name"]}</Link></TableCell>
                        <TableCell>{shop["phone"]}</TableCell>
                        <TableCell>{shop["hours"]}</TableCell>
                        <TableCell>{shop["address"]}</TableCell>
                        <TableCell>
                        <DeleteIcon
                                // add onClick method here
                                onClick={() => props.deleteShop(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings