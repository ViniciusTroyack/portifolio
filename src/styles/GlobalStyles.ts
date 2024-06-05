"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --main-bg-color: #141414;
  --main-purple: #4f397b;
  --white-text: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}

body {
  background-color: var(--main-bg-color);
};
`;
export default GlobalStyles;
