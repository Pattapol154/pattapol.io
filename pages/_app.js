import React from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import theme from "../styles/theme";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            height: -webkit-fill-available;
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            height: 0px;
            width: 0px;
            background: transparent;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#ffffff" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
