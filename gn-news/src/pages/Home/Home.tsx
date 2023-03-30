import { Box, Heading, Center, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  numberOfArt: Function;
}

const Home = (props: Props):  JSX.Element => {
  useEffect(() => {
    props.numberOfArt(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { t } = useTranslation();

  return (
    <Box
      w="90vw"
      left="0"
      right="0"
      margin="2rem auto 2rem auto"
      padding="2rem"
      bgColor="flag.100"
      bgImage="linear-gradient(rgb(154, 23, 80), rgb(93, 0, 30), rgb(154, 23, 80))"
      borderRadius="50px"
      outline="3px solid"
      outlineColor="flag.300"
    >
      <Center
        display="flex"
        flexDirection="column"
        textAlign="center"
        h="100%"
        w="100%"
        gap="1rem"
      >
        <Heading>{t("homepageWelcome")}</Heading>
        <Text>{t("homeInstructions")}</Text>
        <Text>{t("taskDescription")}</Text>
        <Text>{t("taskCounter")}</Text>
      </Center>
    </Box>
  );
};

export default Home;
