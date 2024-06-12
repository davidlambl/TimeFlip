import React from 'react';
import { Text } from "@chakra-ui/react";
import { formatTime } from '../utils/time.ts';

export const TimeDisplay: React.FC<{ totalTime: number }> = (props) => {
  const { totalTime } = props;

  return (
    <Text>
      {formatTime(totalTime)}
    </Text>
  );
}