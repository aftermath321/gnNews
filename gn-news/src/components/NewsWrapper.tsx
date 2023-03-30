import News from "./News";
import { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  SimpleGrid,
  Spinner,
  Center,
} from "@chakra-ui/react";

export type Article = {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: Date;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string | null;
};

interface Props {
  numberOfArt: Function
}

const NewsWrapper = (props: Props): JSX.Element => {
  const [newsList, setNewsList] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const layout = useSelector((state: RootState) => state.layout.layoutState);

  const { code } = useParams<string>();
  const countryCode: string = code!;

  useEffect(() => {
    setIsLoading(true);
    fetchNews(countryCode).then((data) => {
      const news: Article[] = data as unknown as Article[];
      props.numberOfArt(news.length);
      setNewsList(news);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);



  const renderGrid = (): JSX.Element => {
    if (isLoading) {
      return (
        <Center h="100vh">
          <Spinner
            size="xl"
            color="flag.200"
            thickness="6px"
            alignSelf="center"
          />
        </Center>
      );
    } else {
      return (
        <>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            marginBottom="3rem"
            borderRadius="25px"
          >
            {newsList.map((article) => {
              return (
                <span key={article.title}>
                  <News data={article} />
                </span>
              );
            })}
          </SimpleGrid>
        </>
      );
    }
  };
  const renderList = (): JSX.Element => {
    if (isLoading) {
      return (
        <Center h="100vh">
          <Spinner size="xl" color="flag.200" thickness="6px" />
        </Center>
      );
    } else {
      return (
        <>
          <Card
            pos="static"
            marginBottom="3rem"
            bgColor="flag.400"
            color="flag.200"
            bgImage="linear-gradient(rgb(154, 23, 80), rgb(93, 0, 30), rgb(154, 23, 80))"
            borderRadius="25px"
            boxShadow="2xl"
            outline="2px solid"
            outlineColor="flag.300"
            cursor="pointer"
          >
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                {newsList.map((article) => {
                  return (
                    <span key={article.title}>
                      <News data={article} />
                    </span>
                  );
                })}
              </Stack>
            </CardBody>
          </Card>
        </>
      );
    }
  };

  function newsLayout(): JSX.Element {
    if (layout === "list") {
      return renderList();
    } else if (layout === "grid") {
      return renderGrid();
    } else {
      return <></>;
    }
  }

  return <>{newsLayout()}</>;
};

export default NewsWrapper;
