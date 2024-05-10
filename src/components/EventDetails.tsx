import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Heading, ListItem, Spinner, Text, UnorderedList } from "@chakra-ui/react";
import { DailyReport, Day } from '../interfaces/timeTrackingModel';
import { fetchData } from '../services/apiService';

interface EventDetailsProps {
  selectedDate?: Date | null;
}

async function fetchDailyReport(day: string, timeOrPaymentSorting: boolean = true) {
  const baseUrl = "https://newapi.timeflip.io/report/daily";
  const url = `${baseUrl}?timeOrPaymentSorting=${timeOrPaymentSorting}&beginDateStr=${day}&endDateStr=${day}`;
  return await fetchData<DailyReport>(url);
}

const TimeDisplay: React.FC<{ totalTime: number }> = (props) => {
  function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  }

  return <Text>{formatTime(props.totalTime)} minutes</Text>;
}

const EventDetails: React.FC<EventDetailsProps> = (props) => {
  const { date } = useParams<{ date: string }>();
  const day: string = props.selectedDate?.toISOString()?.slice(0, 10) ?? date ?? '2024-01-01';
  const { isLoading, data: fetchedData } = useQuery({
    queryKey: [day],
    queryFn: () => fetchDailyReport(day),
  });

  if (isLoading) {
    return <Spinner color="blue.500" />;
  }

  const dayData = fetchedData?.weeks[0].days.find((d: Day) => d.dateStr === day);

  return (
    <Box mt="1">
      <Heading size='lg' mb={4}>{day}</Heading>
      {dayData && dayData.tasksInfo.length > 0 ? (
        <UnorderedList styleType={"none"}>
          {dayData.tasksInfo.map((taskInfo, index) => (
            <ListItem key={index}>
              <Heading size="sm">{taskInfo.task.name}</Heading>
              <TimeDisplay totalTime={taskInfo.totalTime} />
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