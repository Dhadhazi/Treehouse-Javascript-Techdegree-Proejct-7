import React from 'react';
import { NavLink } from 'react-router-dom';

const QuickLinks = () => {
	return (
		<nav className="main-nav">
			<ul>
				<li>
					<NavLink to="../search/trees">Tree</NavLink>
				</li>
				<li>
					<NavLink to="../search/house">House</NavLink>
				</li>
				<li>
					<NavLink to="../search/teacher">Teacher</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default QuickLinks;
