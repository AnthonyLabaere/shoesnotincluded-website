import { createGlobalStyle } from 'styled-components'

import CourierNewBold from '../assets/fonts/CourierNew-Bold.ttf'

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");
 
    @font-face {
        font-family: 'CourierNew-Bold';
        src: local('CourierNew-Bold'), url(${CourierNewBold}) format('truetype');
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    * {
    box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-weight: "bold";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    a {
        text-decoration: none;
    }

    textarea, input, button, select { 
        font-family: inherit;
        font-size: inherit;
    }
`
