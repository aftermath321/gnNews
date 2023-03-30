import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setGrid, setList } from "../store/layoutSlice";
import { Link } from "react-router-dom";
import { BiGridAlt } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import {
  Box,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

interface Props{
  setter: Function,
  sideButtonFunc: Function
}

const Header = (props: Props): JSX.Element => {
  const layout = useSelector((state: RootState) => state.layout.layoutState);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const switchLayout = (): void => {
    if (layout === "list") {
      dispatch(setGrid());
    } else {
      dispatch(setList());
    }
  };

  function enablePop(): void {
    props.setter(true);
  }
  const layoutIcons = (): JSX.Element => {
    if (layout === "list") {
      return <BiGridAlt size={50} />;
    } else {
      return <AiOutlineUnorderedList size={50} />;
    }
  };

  return (
    <Box
      pos="sticky"
      zIndex="4"
      top="0"
      h="60px"
      bgColor="flag.100"
      bgImage="linear-gradient(rgb(93, 0, 30), rgb(154, 23, 80))"
      
      textShadow="1px 1px #ff0000"
      outline="3px solid"
      outlineColor="flag.300"
    >
      <nav>
        <UnorderedList
          display="flex"
          flexDirection="row"
          h="60px"
          justifyContent={{ base: "space-between", md: "space-around" }}
          alignItems="center"
          fontSize="1.5rem"
          margin="auto"
          listStyleType="none"
        >
          <ListItem
            display={{ base: "flex", md: "none" }}
            onClick={() => props.sideButtonFunc()}
            _hover={{ color: "flag.300" }}
            transitionDuration="300ms"
          >
            <Center>
              <ChevronRightIcon boxSize={30}></ChevronRightIcon>
            </Center>
          </ListItem>

          <ListItem
            onClick={() => switchLayout()}
            cursor="pointer"
            _hover={{ transform: "translateY(-5px)", color: "flag.300" }}
            transitionDuration="300ms"
          >
            {layoutIcons()}
          </ListItem>
          <ListItem
            _hover={{ transform: "translateY(-5px)", color: "flag.300" }}
            transitionDuration="300ms"
          >
            <Link to="/">
              <Box w="75px" h="75px" m="5px">
                <Image
                  src="https://i.imgur.com/6QXoGJa.png"
                  alt="gn-news_logo"
                />
              </Box>
            </Link>
          </ListItem>
          <ListItem
            onClick={enablePop}
            _hover={{ transform: "translateY(-5px)", color: "flag.300" }}
            transitionDuration="300ms"
            textAlign="center"
          >
            <Heading as="h3" size="lg" my="0.5rem" mr="0.5rem" cursor="pointer">
              {t("clickMe")}
            </Heading>
          </ListItem>
        </UnorderedList>
      </nav>
    </Box>
  );
};

export default Header;
