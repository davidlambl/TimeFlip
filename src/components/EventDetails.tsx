import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Heading, ListItem, Spinner, Text, UnorderedList } from "@chakra-ui/react";
import { DailyReport, Day } from '../interfaces/timeTrackingModel';
import { fetchData } from '../services/apiService';
import { TimeDisplay } from './TimeDisplay';

interface EventDetailsProps {
  selectedDate?: Date;
}

async function fetchDailyReport(selectedDate: Date, timeOrPaymentSorting: boolean = true) {
  const day = selectedDate.toISOString()?.slice(0, 10)
  const baseUrl = "https://newapi.timeflip.io/report/daily";
  const url = `${baseUrl}?timeOrPaymentSorting=${timeOrPaymentSorting}&beginDateStr=${day}&endDateStr=${day}`;
  return await fetchData<DailyReport>(url);
}

const EventDetails: React.FC<EventDetailsProps> = ({ selectedDate = new Date() }) => {
  const selectedDateFormatted = new Date(selectedDate.toLocaleDateString());
  const { isLoading, data: fetchedData, isError, error } = useQuery({
    queryKey: [selectedDateFormatted.toString()],
    queryFn: () => fetchDailyReport(selectedDateFormatted),
    staleTime: Infinity
  });
  const dayData = fetchedData?.weeks[0]?.days?.find((d: Day) => d.dateStr === selectedDateFormatted.toISOString()?.slice(0, 10));

  if (isLoading) return <Spinner color="blue.500" />;
  if (isError) return <div>Error: {(error).message}</div>;

  return (
    <Box mt="1">
      <Heading size='lg' mb={4}>{selectedDateFormatted.toISOString()?.slice(0, 10)}</Heading>
      {dayData && dayData.tasksInfo.length > 0 ? (
        <UnorderedList styleType={"none"}>
          {dayData.tasksInfo.map(taskInfo => (
            <ListItem key={taskInfo.task.id}>
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