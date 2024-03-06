import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { DailyReport } from '../interfaces/timeTrackingModel';
import { fetchData } from '../services/apiService';

interface EventDetailsProps {
	selectedDate?: Date | null;
}

async function fetchDailyReport(day: string) {
	return await fetchData<DailyReport>(
		`https://newapi.timeflip.io/report/daily?timeOrPaymentSorting=true&beginDateStr=${day}&endDateStr=${day}`
	);
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
	const { date } = useParams<{ date: string }>();
	const day: string =
		props.selectedDate?.toISOString()?.slice(0, 10) ?? date ?? '2024-01-01';
	const dateDetailsQuery = useQuery({
		queryKey: [day],
		queryFn: () => fetchDailyReport(day),
	});

	if (dateDetailsQuery.isLoading) {
		return <h1>...</h1>;
	}

	const data: DailyReport | undefined = dateDetailsQuery.data;
	return (
		<div>
			<h1>Tasks for {day}</h1>
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
