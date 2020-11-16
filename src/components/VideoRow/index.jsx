import React from 'react';

import './videoRow.css';

function VideoRow({ 
	views, 
	subs,
	description,
	timestamp,
	channel,
	title, 
	image
}) {
  return (
		<div className="videoRow">
			<img src={image} alt=""/>
			<div className="videoRowText">
				<h3>
					{title}
				</h3>
				<p className="videoRowHeadline">
					{channel} * 
					<span className='videoRowSubs'>
						<span className="videoRowSubsNumber">{subs}</span> Inscritos
					</span>{" "}
					 {views} visualizações * {timestamp}
				</p>
				<p className="videoRowDescription">
					{description}
				</p>
			</div>
		</div>
	);
}

export default VideoRow;