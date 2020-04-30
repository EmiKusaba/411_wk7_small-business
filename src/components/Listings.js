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
import { useHistory, Link } from 'react-router-dom'
import { checkAuth } from "../Router";

const Listings = (props) => {
    const history = useHistory();

    return (
        <Container maxWidth="lg" className="shop-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.shops.map((shop, idx) => (
                        <TableRow key={shop.Id}>
                            <TableCell component="th" scope="row">
                                {shop.Id}
                            </TableCell>
                            <TableCell style={{ "color": "blue", "textDecoration": "underline" }}><Link to={`/shop/${shop.Id}`}>{shop["Name"]}</Link></TableCell>
                            <TableCell>{shop["Phone"]}</TableCell>
                            <TableCell>{shop["Hours"]}</TableCell>
                            <TableCell>{shop["Address"]}</TableCell>
                            <TableCell>{shop["Description"]}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                    // add onClick method here
                                    onClick={() => checkAuth() ? props.deleteShop(idx) : history.push("/login")}
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