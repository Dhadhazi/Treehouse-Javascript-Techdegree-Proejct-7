import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = (props) => {
	let photos;
	if (props.data.length > 0) {
		photos = props.data.map((photo) => {
			let link = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
			return <Photo url={link} key={photo.id} alt={photo.title} />;
		});
	}
	else {
		photos = <NotFound />;
	}

	return (
		<div className="photo-container">
			<h2>{props.title}</h2>
			<ul>{photos}</ul>
		</div>
	);
};

export default Gallery;
