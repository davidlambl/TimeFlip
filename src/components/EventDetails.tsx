import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { DailyReport, Day } from '../interfaces/timeTrackingModel';
import { fetchData } from '../services/apiService';

interface EventDetailsProps {
  selectedDate?: Date | null;
}

async function fetchDailyReport(day: string) {
  return await fetchData<DailyReport>(
    `https://newapi.timeflip.io/report/daily?timeOrPaymentSorting=true&beginDateStr=${day}&endDateStr=${day}`
  );
}

const TimeDisplay: React.FC<{ totalTime: number }> = (props) => {
  function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Pad the seconds with leading zero if less than 10
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;
  }

  return <p>{formatTime(props.totalTime)} minutes</p>;
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
  const { date } = useParams<{ date: string }>();
  const day: string = props.selectedDate?.toISOString()?.slice(0, 10) ?? date ?? '2024-01-01';
  const dateDetailsQuery = useQuery({
    queryKey: [day],
    queryFn: () => fetchDailyReport(day),
  });

  if (dateDetailsQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  const data: DailyReport | undefined = dateDetailsQuery.data;

  // Find the correct day's data
  const dayData = data?.weeks[0].days.find((d: Day) => d.dateStr === day);

  return (
    <div>
      <h1>Tasks for {day}</h1>
      {dayData && dayData.tasksInfo.length > 0 ? (
        <ul>
          {dayData.tasksInfo.map((taskInfo, index) => (
            <li key={index}>
              <h3>{taskInfo.task.name}</h3>
              <TimeDisplay totalTime={taskInfo.totalTime} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found for this date.</p>
      )}
    </div>
  );
};

export default EventDetails;