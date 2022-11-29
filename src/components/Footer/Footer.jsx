import React, { useState } from 'react';

// image
import img from '../../img/logo1.png'
import img1 from '../../img/uploads/error-bg.jpg'

//mui-material package
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { makeStyles } from '@material-ui/core/styles';

// package
import { Link, NavLink } from 'react-router-dom';

//style 
const useStyles = makeStyles({
	root: {
		width: 2000,
		backgroundImage: `url(${img1})`,
		background: 'no-repeat',
		color: "#abb7c4",
		flexWrap: 'wrap'
	},
});

export const Footer = () => {
	//states
	const classes = useStyles();
	const [value, setValue] = useState('Movies');


	/**
	 *  handle onchage icon bar
	 * @param {object} event 
	 * @param {string} newValue 
	 */
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<div className="fixed-bottom">
				<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
					<BottomNavigationAction
						style={{ color: "whitesmoke" }}
						label="Movies"
						value="Movies"
						icon={<Link to='/' ><MovieIcon style={{ fontSize: 31, color: "#abb7c4" }} /></Link>}
					/>
					<BottomNavigationAction
						style={{ color: "whitesmoke" }}
						label="TV Show"
						value="TV Show"
						icon={<Link to='/tvshow' ><LiveTvIcon style={{ fontSize: 31, color: "#abb7c4" }} /></Link>}
					/>
					<BottomNavigationAction
						style={{ color: "whitesmoke" }}
						label="Trending"
						value="Trending"
						icon={<Link to='/trending' ><WhatshotIcon style={{ fontSize: 31, color: "#abb7c4" }} /></Link>}
					/>
				</BottomNavigation>
			</div>
			<footer className="ht-footer">
				<div className="container">
					<div className="flex-parent-ft">
						<div className="flex-child-ft item1">
							<NavLink href="index-2.html"><img className="logo" src={img} alt="" /></NavLink>
							<p>5th Avenue st, manhattan<br />
								New York, NY 10001</p>
							<p>Call us: <NavLink href="#">(+01) 202 342 6789</NavLink></p>
						</div>
						<div className="flex-child-ft item2">
							<h4>Resources</h4>
							<ul>
								<li><NavLink href="#">About</NavLink></li>
								<li><NavLink href="#">Blockbuster</NavLink></li>
								<li><NavLink href="#">Contact Us</NavLink></li>
								<li><NavLink href="#">Forums</NavLink></li>
								<li><NavLink href="#">Blog</NavLink></li>
								<li><NavLink href="#">Help Center</NavLink></li>
							</ul>
						</div>
						<div className="flex-child-ft item3">
							<h4>Legal</h4>
							<ul>
								<li><NavLink href="#">Terms of Use</NavLink></li>
								<li><NavLink href="#">Privacy Policy</NavLink></li>
								<li><NavLink href="#">Security</NavLink></li>
							</ul>
						</div>
						<div className="flex-child-ft item4">
							<h4>Account</h4>
							<ul>
								<li><NavLink href="#">My Account</NavLink></li>
								<li><NavLink href="#">Watchlist</NavLink></li>
								<li><NavLink href="#">Collections</NavLink></li>
								<li><NavLink href="#">User Guide</NavLink></li>
							</ul>
						</div>
						<div className="flex-child-ft item5">
							<h4>Newsletter</h4>
							<p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
							<form action="#">
								<input type="text" placeholder="Enter your email..." />
							</form>
							<NavLink href="#" className="btn">Subscribe now <i className="fa fa-arrow-right"></i></NavLink>
						</div>
					</div>
				</div>
				<div className="ft-copyright">
					<div className="ft-left">
						<p><NavLink href="https://www.templateshub.net">Templates Hub</NavLink></p>
					</div>
					<div className="backtotop">
						<p><NavLink href="#" id="back-to-top">Back to top <i className="fa fa-arrow-up"></i></NavLink></p>
					</div>
				</div>
			</footer>
		</>
	)
}

