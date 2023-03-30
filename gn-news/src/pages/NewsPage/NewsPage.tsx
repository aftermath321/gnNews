import NewsWrapper from "../../components/NewsWrapper";
import { Box } from "@chakra-ui/react";

interface Props {
  numberOfArt: Function
}

const NewsPage = (props: Props): JSX.Element => {
  return (
    <Box
      w="90vw"
      minH="90vh"
      left="0"
      right="0"
      margin="2rem auto 2rem auto"
      padding="1rem"
      bgColor="flag.100"
      bgImage="linear-gradient(rgb(154, 23, 80), rgb(93, 0, 30), rgb(154, 23, 80))"
      borderRadius="25px"
      outline="3px solid"
      outlineColor="flag.300"
    >
      <NewsWrapper numberOfArt={props.numberOfArt} />
    </Box>
  );
};

export default NewsPage;
