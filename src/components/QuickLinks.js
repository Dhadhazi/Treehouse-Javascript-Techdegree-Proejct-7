import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = (props) => {
	return (
		<nav className="main-nav">
			<ul>
				<li>
					<Link to="../search/trees" onClick={() => props.handleSearch('Trees')}>
						Trees
					</Link>
				</li>
				<li>
					<Link to="../search/house" onClick={() => props.handleSearch('House')}>
						House
					</Link>
				</li>
				<li>
					<Link to="../search/teacher" onClick={() => props.handleSearch('Teacher')}>
						Teacher
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default QuickLinks;
