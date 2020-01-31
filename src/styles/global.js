import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
        overflow: hidden;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
   }
   html, body, #root {
       width: 100%;
       height: 100vh;
       background-color: #E5E5E5;
   }

   @font-face {
        font-family: SF Pro Display;
        font-weight: 400;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff46');
    }
`;
