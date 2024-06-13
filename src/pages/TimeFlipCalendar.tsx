import React from "react";
import { Flex } from "@chakra-ui/react";
import ThemedCalendar from "../components/ThemedCalendar.tsx";
import BigCalendar from "../components/BigCalendar.tsx";

interface TimeFlipCalendarProps {
  isToggled: boolean;
}

const TimeFlipCalendar: React.FC<TimeFlipCalendarProps> = ({ isToggled }) => {
  return (
    <Flex flexDirection="column" width="100%" height="100vh">

      <Flex width="100%" flexGrow={1}>
        {isToggled ?
          <BigCalendar />
          :
          <ThemedCalendar />
        }
      </Flex>
    </Flex>
  );
};

export default TimeFlipCalendar;