import { countryList } from "../constants/countryList";
import {
  Flex,
  Box,
  ListItem,
  UnorderedList,
  Heading,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { Slide } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

interface Props {
  isOpen: boolean;
  closeFunction: Function;
}

const SideMenu = (props: Props): JSX.Element => {
  const { t } = useTranslation();

  const mobileMenu = (): JSX.Element => {
    if (props.isOpen) {
      return (
        <>
          <Slide direction="left" in={props.isOpen} style={{ zIndex: 10 }}>
            <Box
              h="100%"
              w="100%"
              bgImage="linear-gradient(rgb(154, 23, 80), rgb(93, 0, 30), rgb(154, 23, 80))"
              pos="absolute"
              textShadow="1px 1px #ff0000"
            >
              <RxCross1
                size={50}
                onClick={() => props.closeFunction()}
                style={{ zIndex: "10", margin: "1rem" }}
              />

              <Center> {countryMenu()}</Center>
            </Box>
          </Slide>
        </>
      );
    } else {
      return <></>;
    }
  };

  const countryMenu = (): JSX.Element => {
    return (
      <>
        <Flex zIndex="4" w={{ base: "70%", md: "170px" }} h="100%">
          <nav>
            <UnorderedList
              fontSize={{ base: "2rem", md: "1rem" }}
              pos="fixed"
              display="flex"
              marginTop="auto"
              alignContent="space-between"
              flexDirection="column"
              gap={{ base: "30px", md: "10px" }}
              padding={{ base: "25px", md: "0px" }}
              paddingTop={{ base: "30px", md: "10px" }}
            >
              {countryList.map((country) => {
                return (
                  <ListItem
                    key={country.code}
                    display="flex"
                    flexDirection="row"
                    gap={{ base: "30px", md: "10px" }}
                    alignItems="center"
                    w="100%"
                    _hover={{
                      transform: "translateY(-5px)",
                      color: "flag.300",
                    }}
                    transitionDuration="300ms"
                  >
                    <Link
                      to={`/country/${country.code}`}
                      onClick={() => props.closeFunction()}
                    >
                      <Flex
                        height={{ base: "40px", md: "20px" }}
                        width={{ base: "60px", md: "40px" }}
                        boxShadow="2xl"
                      >
                        <Image
                          src={country.flag}
                          alt="flag"
                          display="flex"
                          flexDirection="row"
                          flex-wrap="wrap"
                        />
                      </Flex>
                    </Link>
                    <Link
                      to={`/country/${country.code}`}
                      onClick={() => props.closeFunction()}
                    >
                      <Text> {country.name}</Text>
                    </Link>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </nav>
        </Flex>

        <Box w="30%" h="100%" display="flex" flexDirection="column">
          <Heading
            transform="rotate(270deg)"
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
            letterSpacing="0.2rem"
            fontWeight="700"
          >
            {t("countries")}
          </Heading>
        </Box>
      </>
    );
  };

  return (
    <>
      {mobileMenu()}
      <Box
        h="240px"
        w="230px"
        textShadow="1px 1px #ff0000"
        bgColor="flag.400"
        bgGradient="linear(to-r, flag.100, flag.400)"
        borderRightRadius="50px"
        display={{ base: "none", md: "flex" }}
        pos="fixed"
        top="15%"
        justifyContent="start"
        transform="translateX(-182px)"
        transitionDuration="300ms"
        z-index="6"
        outline="3px solid"
        outlineColor="flag.300"
        _hover={{ transform: "translateX(0)" }}
        _active={{ transform: "translateX(0)" }}
      >
        {countryMenu()}
      </Box>
    </>
  );
};

export default SideMenu;
