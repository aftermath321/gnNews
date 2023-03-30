import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "GN-News",
        homepageWelcome: "Welcome to GN-News!",
        clickMe: "About Task",
        articleNumber: "Number of articles shown:",
        homeInstructions:
          "Please select country from the side menu to see the news from that country. " +
          "If you click logo on the top of the screen, you will be redirected to this page.",
        taskDescription:
          "This website was created with CRA (I didn't want to take too much initiative during task, " +
          "so I used standard CRA instead of NextJS or Vite) and also Chakra UI",
        taskCounter: "I did all the given tasks except unit testing.",
        countries: "Countries",
        aboutTask: "About the task",
        difficulties: "Difficulties?",
        difficultiesIntro:
          "If I was to name the biggest difficulties the would be:",
        difficultiesOne:
          "React router and useEffect problem - none of these are difficult to use, yet I made a simple syntax error" +
          " which was not found by the IDE and I have wasted too much time on trying to locate it.",
        difficultiesTwo:
          "The second challenge was using Chakra UI. I have never used this UI before, so I had to study" +
          " while working on it. Normally I would use TailwindCSS, but in the tasks description it was" +
          " mentioned to use UI, not whole framework (maybe I misinterpreted it)",
        funIntro: "Most fun",
        fun:
          "Had to tell, I had fun with the entire task (except difficulty #1, the #2 was fun and" +
          " gave me and lot of satisfaction. No matter the result of recruitment, I feel more motivated now," +
          "I have learned a few new things, I added few things to the 'to-do' list on which I have to work some more" +
          " (most importantly further learning of Chakra UI and Unit Testing).",
        author: "Author:",
        content: "No content",
        close: "Close",
        link: "Link",
        published: "Published:",
        source: "Source: ",
        errorIntro: "Something went wrong...",
        error:
          "Please click logo on the top of the screen to go to the Homepage or " +
          "select country from the side menu to see the news from that country.",
      },
    },
    pl: {
      translation: {
        title: "GN-News",
        homepageWelcome: "Witaj w GN-News!",
        clickMe: "O zadaniu",
        articleNumber: "Ilość wyświetlanych artykułów:",
        homeInstructions:
          "Proszę wybrać kraj z menu po lewej stronie by wyświetlić wiadomości dla tego kraju. " +
          "Jeśli klikniesz na logo z góry ekranu, zostaniesz przekierowany na tę stronę.",
        taskDescription:
          "Ta strona została stworzona z CRA (nie chciałem wychodzić z zbyt dużą " +
          "iniciatywą czego używać podczas tego zadania, więc użyłem " +
          "standardowego CRA zamiast NextJS lub Vite), a także ChakraUI.",
        taskCounter:
          "Udało się mi wykonać wszystkie polecenia oprócz otestowania strony.",
        countries: "Kraje",
        aboutTask: "O zadaniu",
        difficulties: "Trudności?",
        difficultiesIntro:
          "Gdybym miał wymienić największe problemy z jakimi się spotkałem były" +
          "to:",
        difficultiesOne:
          "Problem z React Router i useEffect - o ile same funkcje znam i nie" +
          "ma w nich nic trudnego, popełniłem 'czeski błąd', IDE go nie wykryło" +
          "i zmarnowałem dużo czasu na znalezieniu problemu, gdyż szukałem nie" +
          "tam, gdzie powinienem.",
        difficultiesTwo:
          "Drugim wyzwaniem okazało się użycie Chakra UI, nie korzystałem nigdy" +
          "wcześniej z tego UI, także musiałem uczyć się na bieżąco. Normalnie" +
          "skorzystałbym z TailwindCSS, ale w treści zadania było wspomniane o" +
          "użyciu UI, nie Frameworka (możliwe, że źle zinterpretowałem)",
        funIntro: "Najwięcej frajdy?",
        fun:
          "Ciężko powiedzieć, dobrze się bawiłem z całym zadaniem (oprócz " +
          "trudności #1, #2 była przyjemna i dała sporo satysfkacji). Niezależnie " +
          "od wyniku rekrutacji, na pewno czuję się bardziej zmotywowany, " +
          "nauczyłem się kilku nowych rzeczy, dopisałem do 'to-do' listy kilka " +
          "pozycji, nad którymi muszę popracować (Przedewszystkim dalsza nauka " +
          "Chakra UI oraz Testy)",
        author: "Autor:",
        content: "Brak zawartości",
        close: "Zamknij",
        link: "Link",
        published: "Opublikowano:",
        source: "Źródło: ",
        errorIntro: "Coś poszło nie tak...",
        error:
          "Kliknij na logo na górze ekranu by powrócić do strony startowej lub " +
          "wybierz kraj z menu po lewej stronie ekranu by wyświetlić wiadomości dla tego kraju.",
      },
    },
  },
});

export default i18n;