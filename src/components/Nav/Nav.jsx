import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Nav.module.css';

const Nav = () => {
	return (
	<nav className={classes.nav}>
		<div className={classes.item}>
			<NavLink to={'/profile'}>Profile</NavLink>
			</div>
			<div className={`${classes.item} ${classes.active}`}>
				<NavLink to={'/dialogs'}>Messages</NavLink>
			</div>
	{/* <div className={classes.item}>
	  <NavLink to={'/profile'} activeclassname={classes.activeLink}>Profile</NavLink>
	</div>
	<div className={`${classes.item} ${classes.active}`}>
	  <NavLink to={'/dialogs'} activeclassname={classes.activeLink}>Messages</NavLink>
	</div> */}
	{/* <div className={classes.item}>
	 <a href={() => false}>News</a>
	</div>
	<div className={classes.item}>
	  <a href={() => false}>Music</a>
	</div>
	<div className={classes.item}>
	  <a href={() => false}>Settings</a>
	</div> */}
	{/* <div> */}
	</nav>
	)
}

export default Nav;
