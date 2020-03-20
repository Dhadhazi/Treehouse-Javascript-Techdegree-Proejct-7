import React from 'react';
import { Link } from 'react-router-dom';

//Top 3 navigation links
const QuickLinks = () => {
	return (
		<nav className="main-nav">
			<ul>
				<li>
					<Link to="../search/trees">Trees</Link>
				</li>
				<li>
					<Link to="../search/house">House</Link>
				</li>
				<li>
					<Link to="../search/teacher">Teacher</Link>
				</li>
			</ul>
		</nav>
	);
};

export default QuickLinks;
