import { Box, Text, Heading, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Error = (): JSX.Element => {

    const { t } = useTranslation();

  return (
    <Box
      w="90vw"
      h="50vh"
      left="0"
      right="0"
      margin="2rem auto 2rem auto"
      padding="1rem"
      bgColor="flag.100"
      bgImage="linear-gradient(rgb(154, 23, 80), rgb(93, 0, 30), rgb(154, 23, 80))"
      borderRadius="50px"
      outline="3px solid"
      outlineColor="flag.300"
    >
      <Center
        display="flex"
        flexDirection="column"
        h="100%"
        w="100%"
        gap="1rem"
      >
        <Heading>{t("errorIntro")}</Heading>
        <Text>{t("error")}</Text>
      </Center>
    </Box>
  );
};

export default Error;
