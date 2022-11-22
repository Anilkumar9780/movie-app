/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

// image
import img from '../../img/logo1.png'

//mui-material package
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Box';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WhatshotIcon from '@mui/icons-material/Whatshot';

// package
import { Link } from 'react-router-dom';

export const Footer = () => {
	const [value, setValue] = useState();
	const ref = React.useRef(null);
	return (
		<>
			<div className="fixed-bottom">
				<Box sx={{ pb: 2 , width: 250 }} ref={ref}>
					<Paper>
						<BottomNavigation
							showLabels
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						>
							<Link to='/' ><BottomNavigationAction label="Movies" icon={<MovieIcon style={{ fontSize: 35 }} />} /></Link>
							<Link to='/trending' ><BottomNavigationAction label="TV Show" icon={<LiveTvIcon style={{ fontSize: 35 }} />} /></Link>
							<Link to='/tvshow' ><BottomNavigationAction label="Trending" icon={<WhatshotIcon style={{ fontSize: 35 }} />} /></Link>
						</BottomNavigation>
					</Paper>
				</Box>

			</div>
			<footer className="ht-footer">
				<div className="container">
					<div className="flex-parent-ft">
						<div className="flex-child-ft item1">
							<a href="index-2.html"><img className="logo" src={img} alt="" /></a>
							<p>5th Avenue st, manhattan<br />
								New York, NY 10001</p>
							<p>Call us: <a href="#">(+01) 202 342 6789</a></p>
						</div>
						<div className="flex-child-ft item2">
							<h4>Resources</h4>
							<ul>
								<li><a href="#">About</a></li>
								<li><a href="#">Blockbuster</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Forums</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Help Center</a></li>
							</ul>
						</div>
						<div className="flex-child-ft item3">
							<h4>Legal</h4>
							<ul>
								<li><a href="#">Terms of Use</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Security</a></li>
							</ul>
						</div>
						<div className="flex-child-ft item4">
							<h4>Account</h4>
							<ul>
								<li><a href="#">My Account</a></li>
								<li><a href="#">Watchlist</a></li>
								<li><a href="#">Collections</a></li>
								<li><a href="#">User Guide</a></li>
							</ul>
						</div>
						<div className="flex-child-ft item5">
							<h4>Newsletter</h4>
							<p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
							<form action="#">
								<input type="text" placeholder="Enter your email..." />
							</form>
							<a href="#" className="btn">Subscribe now <i className="fa fa-arrow-right"></i></a>
						</div>
					</div>
				</div>
				<div className="ft-copyright">
					<div className="ft-left">
						<p><a href="https://www.templateshub.net">Templates Hub</a></p>
					</div>
					<div className="backtotop">
						<p><a href="#" id="back-to-top">Back to top <i className="fa fa-arrow-up"></i></a></p>
					</div>
				</div>
			</footer>
		</>
	)
}

