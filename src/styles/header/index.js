import styled from 'styled-components';

import Menu from './menu';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 84px;
    background-color: #c7e7e2;
    padding: 0 20px;

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14.5714px;
        line-height: 18px;
        color: #154751;
    }

    .header__Header-sc-1ts4630-0 {
        display: none;
    }

    @media screen and (max-width: 600px) {
        background-color: #fff;
        border-bottom: 1px solid #f5f5f5;
        .container__Container-y7puup-0 {
            display: none;
        }
        .header__Header-sc-1ts4630-0 {
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                flex: 0.4;
                justify-content: flex-end;
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 15px;
                    height: 15px;
                    background: #c93b3b;
                    border-radius: 10px;
                    font-family: SF Pro Display;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 7.99549px;
                    line-height: 10px;
                    color: #ffffff;
                }
            }

            ul {
                display: none;
            }

            h2 {
                flex: 0.6;
                text-align: end;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 14.923px;
                line-height: 18px;
                color: #04362f;
            }
        }
    }
`;

Header.Menu = Menu;
