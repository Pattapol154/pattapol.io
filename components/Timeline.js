import React, { useState } from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Icon,
  Stack,
  Divider,
} from "@chakra-ui/core";

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.600",
    dark: "gray.400",
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <Icon name="check-circle" mr={2} color="whatsapp.500" />
          <Text letterSpacing="tight" fontWeight="medium">
            {title}
          </Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2015
    </Heading>
    <List>
      <TimelineStep title="Continue studying 🦅">
        I study Chetupon Commercial College 
      </TimelineStep>
      <TimelineStep title="Starting at the same place 🌿">
        To a new level
      </TimelineStep> 
      <TimelineStep title="Voc.Cert Business Computer (GPA 2.80) 🥇">
        I graduated from Chetupon Commercial College in bangkok
      </TimelineStep>
      <TimelineStep title="Started my first Internship 🔥">
        First time for IT support at JIS Computer
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2013
    </Heading>
    <List>
      <TimelineStep title="Fist time coding 😌💨">
        After studying subjects that are not needed for a long time
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2012
    </Heading>
    <List>
      <TimelineStep title="Started at a small College 🌿🚬">
        I study business computer at Chetupon Commercial College
        <span role="img" aria-label="Beach">
          🏖️
        </span>
      </TimelineStep> 
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1996
    </Heading>
    <List>
      <TimelineStep title="Born 👶🏼🍼" />
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      // mt={5}
    >
      <Heading
        id="timeline"
        // pt="3.5em"
        // mt="-3.5em"
        letterSpacing="tight"
        mb={4}
        size="xl"
        fontWeight="300"
      >
        Timeline
      </Heading>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2020
      </Heading>
      <List>
        <TimelineStep title="Jobseeker🔨">
          After graduation start to learn the coding seriously but,
          my time was busy due to Covid-19.
        </TimelineStep>
        <TimelineStep title="B.BA in information Technology (GPA 2.86)🥇">
          I graduated from Rajamangala University of Technology KrungThep
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="Unity Engine 🏆">
          Make a project game with Unity 
        </TimelineStep>
        <TimelineStep title="FontEnd 🏆">
          Make a website project with django/python
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2017
      </Heading>
      <List>
        <TimelineStep title="High Voc. Cert. in Business Computer (GPA 3.00)🥇">
          I graduated from Chetupon Commercial College in bangkok
        </TimelineStep>
        <TimelineStep title="Finished tired  🤏">
          Realized that coding was a bad for my life because it hard.{" "}
          <span role="img" aria-label="Programer">
          🌱
          </span>
        </TimelineStep>
        <TimelineStep title="Second Internship 😊">
            Second time for IT support at Enter Computer 
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <>
          <FullTimeline />
          <Button
            my={4}
            mx="auto"
            fontWeight="medium"
            rightIcon="chevron-up"
            variant="ghost"
            onClick={() => showFullTimeline(false)}
          >
            See Less
          </Button>
        </>
      ) : (
        <Button
          mt={4}
          mx="auto"
          mb={4}
          fontWeight="medium"
          rightIcon="chevron-down"
          variant="ghost"
          onClick={() => showFullTimeline(true)}
        >
          See More
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;