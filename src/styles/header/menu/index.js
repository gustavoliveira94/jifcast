import styled from 'styled-components';

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 5px 0;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                right: 20px;
                width: 16.17px;
                height: 16.17px;
                background-color: #ff6161;
                border-radius: 10px;
                font-family: SF Pro Display;
                font-style: normal;
                font-weight: bold;
                font-size: 9.13959px;
                line-height: 11px;
                letter-spacing: 0.152327px;
                color: #ffffff;
            }

            p {
                font-family: SF Pro Display;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.199196px;
                color: #4f978d;
                margin-top: 5px;
            }
        }
    }
`;

export default Menu;
