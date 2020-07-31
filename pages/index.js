import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  List,
  ListItem,
  Icon,
  Divider,
  Button,
} from "@chakra-ui/core";

import Timeline from "../components/Timeline";
import Container from "../components/Container";
import { projects } from "../data/lists";

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "rgba(0,0,0,.6)",
    dark: "gray.400",
  };
  const sourceBgColor = {
    light: "#eff3f6",
    dark: "#232533",
  };
  const sourceBorderColor = {
    light: "#cdcfd1",
    dark: "#737373",
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        mx="auto"
        mb={2}
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading
            letterSpacing="tight"
            w={["100%", "80%", "100%"]}
            mb={2}
            as="h1"
            size="2xl"
          >
            Jobseeker.. .. <br />
            Hey there, I'm flattered if you are reading this.
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            My name is Pattapol Tankanpai I live in bangkok, Thailand.
            I have been teaching myself to code seriously since January 2019
          </Text>
          <br/>
          <Text color={secondaryTextColor[colorMode]}>
             My current focus is ReactJS, Django/python, VueJs. I always keen 
            to learn more. While your here check out some of my projects
          </Text>
          <Heading
            id="contact"
            pt="4em"
            mt="-3em"
            mb="2"
            size="lg"
            fontWeight="300"
          >
            Contact:
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            PDF
            &nbsp;
            <Link
              href="/static/images/Resume.pdf"
              color="hsl(208, 99%, 50%)"
            >
              Download CV
            </Link>
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Email
            &nbsp;
              <Link
              href="mailto:sunfly-210@hotmail.com"
              color="hsl(208, 99%, 50%)"
            >
              sunfly-210@hotmail.com
              </Link>
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Gmail
            &nbsp;
              <Link
              href="mailto:pattapoltankanpai@gmail.com"
              color="hsl(208, 99%, 50%)"
            >
              pattapoltankanpai@gmail.com
              </Link>
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={2}>
            Tel. 089-693-1014
            </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={300}>
            Projects
          </Heading>
          <List w="100%">
            {projects.map((project) => (
              <>
                <ListItem py={2}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" fontWeight={100}>
                      <Link
                        _hover={{ textDecoration: "none" }}
                        href={`./projects/${project.name
                          .toLowerCase()
                          .replace(/ +/g, "")}`}
                      >
                        <Flex alignItems="center" fontWeight={100}>
                          <Text fontSize="2xl" mr="0.5em">
                            {project.icon}
                          </Text>
                          <Text
                            fontWeight={400}
                            fontSize="lg"
                            lineHeight="shorter"
                            w={["3em", "5em", "8em"]}
                          >
                            {project.name}
                          </Text>
                        </Flex>
                      </Link>
                      <Text
                        display={["none", "none", "block"]}
                        pl="1em"
                        pr="2em"
                        color={secondaryTextColor[colorMode]}
                        w="full"
                      >
                        {project.description}
                      </Text>
                    </Flex>
                    <Flex>
                      {project.hasOwnProperty("source") ? (
                        <Link
                          _hover={{ textDecoration: "none" }}
                          href={project.source}
                          isExternal
                        >
                          <Button
                            size="sm"
                            leftIcon="github"
                            bg={sourceBgColor[colorMode]}
                            borderColor={sourceBorderColor[colorMode]}
                            borderWidth="1px"
                            pl="1em"
                          >
                            source
                          </Button>
                        </Link>
                      ) : null}
                      {project.hasOwnProperty("live") ? (
                        <Link
                          _hover={{ textDecoration: "none" }}
                          href={project.live}
                          isExternal
                        >
                          <Button
                            ml="0.5em"
                            size="sm"
                            bg="red.400"
                            color="white"
                            p="0.6em"
                          >
                            live
                          </Button>
                        </Link>
                      ) : null}
                      {project.hasOwnProperty("download") ? (
                        <Link
                          _hover={{ textDecoration: "none" }}
                          href={project.download}
                          download
                        >
                          <Button
                            ml="0.5em"
                            size="sm"
                            bg="hsl(208, 99%, 50%)"
                            color="white"
                            p="0.6em"
                          >
                            download
                          </Button>
                        </Link>
                      ) : null}
                    </Flex>
                  </Flex>
                </ListItem>
                {project.name != "Power Up" ? (
                  <Divider display={["none", "none", "block"]} />
                ) : null}
              </>
            ))}
          </List>
        </Flex>
        <Timeline />

      </Stack>
    </Container>
  );
};

export default Index;
