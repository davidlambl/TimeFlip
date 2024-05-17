import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Heading, ListItem, Spinner, Text, UnorderedList } from "@chakra-ui/react";
import { DailyReport, Day } from '../interfaces/timeTrackingModel';
import { fetchData } from '../services/apiService';

interface EventDetailsProps {
  selectedDate?: Date;
}

async function fetchDailyReport(selectedDate: Date, timeOrPaymentSorting: boolean = true) {
  const day = selectedDate.toISOString()?.slice(0, 10)
  const baseUrl = "https://newapi.timeflip.io/report/daily";
  const url = `${baseUrl}?timeOrPaymentSorting=${timeOrPaymentSorting}&beginDateStr=${day}&endDateStr=${day}`;
  return await fetchData<DailyReport>(url);
}

const TimeDisplay: React.FC<{ totalTime: number }> = (props) => {
  function formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    const seconds = totalSeconds % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

    if (hours > 0) {
      return `${formattedHours}:${formattedMinutes} hours`;
    } else if (minutes > 0) {
      return `${formattedMinutes}:${formattedSeconds} minutes`;
    } else {
      return `00:${formattedSeconds} seconds`;
    }
  }

  return <Text>{formatTime(props.totalTime)}</Text>;
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
  let selectedDate: Date = props.selectedDate ?? new Date();
  selectedDate = new Date(selectedDate.toLocaleDateString());
  const {isLoading, data: fetchedData, isError, error} = useQuery({
    queryKey: [selectedDate.toString()],
    queryFn: () => fetchDailyReport(selectedDate),
    staleTime: Infinity
  });
  const dayData = fetchedData?.weeks[0]?.days?.find((d: Day) => d.dateStr === selectedDate.toISOString()?.slice(0, 10));
  if (isLoading) return <Spinner color="blue.500"/>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Box mt="1">
      <Heading size='lg' mb={4}>{selectedDate.toISOString()?.slice(0, 10)}</Heading>
      {dayData && dayData.tasksInfo.length > 0 ? (
        <UnorderedList styleType={"none"}>
          {dayData.tasksInfo.map((taskInfo) => (
            <ListItem key={taskInfo.task.id}>
              <Heading size="sm">{taskInfo.task.name}</Heading>
              <TimeDisplay totalTime={taskInfo.totalTime}/>
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        <Text>No tasks found for this date.</Text>
      )}
    </Box>
  );
};

export default EventDetails;