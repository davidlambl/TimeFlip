import React from 'react';
import { useParams } from 'react-router-dom';

interface EventDetailsProps {
	selectedDate?: Date | null;
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
	const { date } = useParams<{ date: string }>();

	return (
		<div>
			<p>{props.selectedDate?.toDateString() ?? date}</p>
			{/* Fetch and display event details based on the selected date */}
		</div>
	);
};

export default EventDetails;
