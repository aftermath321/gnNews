import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

interface Props {
  setter: Function;
}

const Popup = (props: Props): JSX.Element => {
  function disablePop() {
    props.setter(false);
  }

  const { t } = useTranslation();

  return (
    <Box w="100%" h="100%" zIndex="5" pos="fixed" bgColor="blackAlpha.400">
      <Box
        width={{ base: "80%", md: "60%" }}
        height="80vh"
        left="0"
        right="0"
        top="0"
        bottom="0"
        m="auto"
        pos="fixed"
        bgColor="flag.400"
        outline="1px solid"
        outlineColor="flag.300"
        boxShadow="2xl"
        padding="0.5rem"
        display="flex"
        flexDirection="column"
        gap="1rem"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
        }}
      >
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <RxCross1 size={30} onClick={disablePop} />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="Center">
          <Heading>{t("aboutTask")}</Heading>
        </Box>
        <Heading as="h4" size="md">
          {t("difficulties")}
        </Heading>
        <Text>{t("difficultiesIntro")}</Text>
        <UnorderedList gap="1rem">
          <ListItem>{t("difficultiesOne")}</ListItem>
          <ListItem>{t("difficultiesTwo")}</ListItem>
        </UnorderedList>
        <Heading as="h4" size="md">
          {t("funIntro")}
        </Heading>
        <Text>{t("fun")}</Text>
      </Box>
    </Box>
  );
};

export default Popup;
