import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, useHistory } from 'react-router-dom'
import cookie from "cookie";

const Navigation = (props) => {
  const history = useHistory();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }} className="shopName">
          Amy's Ice Cream
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/listings">Listings</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/add">Add</Link>
          </li >
          <li className="nav-list-item"
            onClick={() => {
              document.cookie = "loggedIn="
              history.push("/login");
            }}>
            {cookie.parse(document.cookie)["loggedIn"] ? "Logout" : "Login"}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation