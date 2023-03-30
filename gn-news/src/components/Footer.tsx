import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "../constants/languages";
import { Box, Text, Select } from "@chakra-ui/react";

interface Props {
  giveNumber: Number;
}

const Footer = (props: Props): JSX.Element => {
  const [time, setTime] = useState<Date>(new Date());

  const { i18n, t } = useTranslation();

  function refreshTime(): void {
    setTime(new Date());
  }

  useEffect(() => {
    const clockTime = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(clockTime);
    };
  }, []);

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <Box
      zIndex="4"
      bottom="0"
      h="60px"
      bgColor="flag.100"
      bgImage="linear-gradient(rgb(154, 23, 80), rgb(93, 0, 30))"
      pos="fixed"
      w="100%"
      marginTop="2rem"
      outline="3px solid"
      outlineColor="flag.300"
    >
      <Box
        w={{ base: "90%", md: "70%" }}
        h="100%"
        bgColor="flag.400"
        left="0"
        right="0"
        m="auto"
        display="flex"
        alignItems="center"
        flexDirection="row"
        gap="10px"
        justifyContent="space-around"
        borderRadius="50px"
        outline="3px solid"
        outlineColor="flag.300"
      >
        <Text
          fontSize={{ base: "1rem", md: "2rem" }}
          fontWeight="700"
          textShadow="1px 1px #ff0000"
          ml="0.5rem"
        >
          {time.toLocaleTimeString()}
        </Text>

        <Text
          fontSize={{ base: "0.8rem", md: "1.5rem" }}
          fontWeight="700"
          textShadow="1px 1px #ff0000"
          textAlign="center"
        >
          {t("articleNumber")} <>{props.giveNumber}</>
        </Text>
        <Box mr="0.5rem">
          <Select
            onChange={onChangeLang}
            bgColor="flag.100"
            display="flex"
            alignSelf="center"
            justifySelf="center"
            _hover={{ color: "flag.300" }}
            transitionDuration="300ms"
          >
            {Languages.map(({ code, label }) => (
              <option
                key={code}
                value={code}
                style={{ backgroundColor: "#5d001e" }}
              >
                {label}
              </option>
            ))}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
