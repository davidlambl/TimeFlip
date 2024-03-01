import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { DailyReport } from '../interfaces/timeTrackingModel';

interface EventDetailsProps {
	selectedDate?: Date | null;
}

async function fetchApiStatus() {
	const res = await fetch(`/report/daily`);
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
		return <h1>...</h1>;
	}
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data: DailyReport = dateDetailsQuery.data;
	return (
		<div>
			<h1>Tasks for {props.selectedDate?.toDateString() ?? date}</h1>
			{data ? (
				<p>
					{data?.weeks[0].days[3].tasksInfo.map((taskInfo, index: number) => (
						<div key={index}>{taskInfo.task.name}</div>
					))}
				</p>
			) : (
				<p>No tasks found for this date.</p>
			)}
		</div>
	);
};

export default EventDetails;
