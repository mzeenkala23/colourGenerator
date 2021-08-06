import { createGlobalStyle } from "styled-components";
import { colors } from "./theme/colours";

export default createGlobalStyle`
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p {
  margin: 0;
}

body > #root > div {
  height: 100%;
}

body {
  background-color: ${colors.bg.primary};
  color: ${colors.text.dark};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
