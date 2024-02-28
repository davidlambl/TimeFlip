import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

interface EventDetailsProps {
	selectedDate?: Date | null;
}

async function fetchApiStatus() {
	const res = await fetch(`https://ui.dev/api/courses/react-query/status`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return await res.json();
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
	const { date } = useParams<{ date: string }>();
	const dateDetailsQuery = useQuery({
		queryKey: [props.selectedDate?.toDateString()],
		queryFn: () => fetchApiStatus(),
	});

	if (dateDetailsQuery.isLoading) {
		return <div>...</div>;
	}
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data = dateDetailsQuery.data;
	return (
		<div>
			<p>{props.selectedDate?.toDateString() ?? date}</p>
			<pre>{JSON.stringify(data)}</pre>
		</div>
	);
};

export default EventDetails;
