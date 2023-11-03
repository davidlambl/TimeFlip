import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const { date } = useParams<{ date: string }>();

	return (
		<div>
			<h1>Event Details</h1>
			<p>Date: {date}</p>
			{/* Fetch and display event details based on the selected date */}
		</div>
	);
};

export default EventDetails;
