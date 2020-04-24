import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete'

// import AddCar from '../containers/AddCar'
 
const Listings = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            {/* <h4>Welcome, {props.user.username}</h4> */}
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
                        <TableCell>{shop["name"]}</TableCell>
                        <TableCell>{shop["phone"]}</TableCell>
                        <TableCell>{shop["hours"]}</TableCell>
                        <TableCell>{shop["address"]}</TableCell>
                        <TableCell>{shop["delete"]}</TableCell>
                        <TableCell>
                            {/* <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeCar(idx)}
                                className="icon text-red" /> */}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings