import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
   }
   html, body, #root {
       overflow: hidden;
       width: 100%;
       height: 100vh;
       background-color: #E5E5E5;

       @media screen and (max-width: 600px) {
            background-color: #fff;
        }
   }
`;
