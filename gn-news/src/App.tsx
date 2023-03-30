import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import NewsPage from "./pages/NewsPage/NewsPage";
import Error from "./pages/Error/Error";
import Popup from "./components/Popup";
import {
  ChakraProvider,
  extendTheme,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

function App(): JSX.Element {
  const [numberOfArticles, setNumberOfArticles] = useState<number>(0);
  const [pop, setPop] = useState<boolean>(false);

  const { isOpen, onToggle, onClose } = useDisclosure();

  const theme = extendTheme({
    colors: {
      flag: {
        100: "#5d001e",
        200: "#e3e2df",
        300: "#e3afbc",
        400: "#9a1750",
        500: "#ee4c7c",
      },
    },
  });

  const popUp = (): JSX.Element => {
    if (pop) {
      return <Popup setter={setPop} />;
    } else {
      return <></>;
    }
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          zIndex="1"
          h="100%"
          minH="100vh"
          color="flag.200"
          bgColor="flag.200"
          bgImage="linear-gradient(rgba(227, 226, 223, 0.3),rgba(227, 226, 223, 0.3)) , url('https://images.unsplash.com/photo-1543788303-c15e49305bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')"
          bgSize="cover"
          bgAttachment="fixed"
          bgRepeat="no-repeat"
        >
          {popUp()}
          <Header setter={setPop} sideButtonFunc={onToggle} />
          <SideMenu closeFunction={onClose} isOpen={isOpen} />

          <Routes>
            <Route
              path="/"
              element={<Home numberOfArt={setNumberOfArticles} />}
            />
            <Route
              path="/country/:code"
              element={<NewsPage numberOfArt={setNumberOfArticles} />}
            />
            <Route path="/*" element={<Error />} />
          </Routes>

          <Footer giveNumber={numberOfArticles} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
