import { Article } from "./NewsWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Box,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Props {
  data: Article;
}

const News = (props: Props): JSX.Element => {
  const layout = useSelector((state: RootState) => state.layout.layoutState);

  const [date, setDate] = useState<Date>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  useEffect(() => {
    function convertDate() {
      setDate(new Date(props?.data?.publishedAt));
    }
    convertDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function imageHandler(image: string | null): string {
    if (image === null) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1024px-Question_mark_%28black%29.svg.png";
    } else {
      return image.toString();
    }
  }

  function contentHandle(
    content: String | null | JSX.Element
  ): JSX.Element | string {
    if (content === null) {
      return <>{t("content")}</>;
    } else {
      return content.toString();
    }
  }

  const popUp = (): JSX.Element => {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent m="2rem" p="1rem">
            <ModalHeader>{props.data.title}</ModalHeader>
            <ModalCloseButton />

            <Center>
              <Text>{contentHandle(props.data.content)}</Text>
            </Center>

            <ModalFooter justifyContent="space-between" w="100%">
              <Text size="sm">
                {t("author")} {props.data.author}
              </Text>
              <Button
                bgColor="flag.100"
                color="flag.200"
                mr={3}
                onClick={onClose}
              >
                <a href={`${props.data.url}`} target="_blank" rel="noreferrer">
                  {t("link")}
                </a>
              </Button>

              <Button
                bgColor="flag.100"
                color="flag.200"
                mr={3}
                onClick={onClose}
              >
                {t("close")}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const gridLayout = (): JSX.Element => {
    return (
      <>
        <Card
          maxW="sm"
          onClick={onOpen}
          pos="static"
          bgColor="flag.400"
          color="flag.200"
          borderRadius="25px"
          boxShadow="2xl"
          outline="1px solid"
          outlineColor="flag.300"
          _hover={{
            transform: "translateY(-5px)",
            color: "flag.300",
          }}
          transitionDuration="300ms"
          cursor="pointer"
        >
          <CardBody>
            <Center>
              <Image
                src={imageHandler(props?.data?.urlToImage)}
                alt="News image"
                borderRadius="md"
                boxSize="150px"
                objectFit="cover"
                color="flag.200"
              />
            </Center>

            <Stack mt="2" spacing="4">
              <Center>
                <Heading size="md" textAlign="center">
                  {props?.data?.title}
                </Heading>
              </Center>
              <Center>
                <Text>{contentHandle(props.data.content)}</Text>
              </Center>
              <Center>
                <Text color="flag.300" fontSize="md">
                  {t("source")}
                  {props?.data?.author}
                </Text>
              </Center>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Center>
                <Text fontSize="md" color="flag.300">
                  {t("published")}
                  {date?.toLocaleDateString()}
                </Text>
              </Center>
              <Center>{popUp()}</Center>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </>
    );
  };
  const listLayout = (): JSX.Element => {
    return (
      <>
        <Box pos="static" zIndex="1" onClick={onOpen}>
          <Heading size="xs" textTransform="uppercase" onClick={onOpen}>
            {props?.data?.title}
          </Heading>
          <Text pt="2" fontSize="sm">
            {t("source")} {props?.data?.author}
          </Text>
          <Text pt="2" fontSize="sm">
            {t("published")} {date?.toLocaleDateString()}
          </Text>
          <Center>{popUp()}</Center>
        </Box>
      </>
    );
  };

  const layoutSetup = (): JSX.Element => {
    if (layout === "list") {
      return listLayout();
    } else if (layout === "grid") {
      return gridLayout();
    } else {
      return <></>;
    }
  };

  return <> {layoutSetup()}</>;
};
export default News;
