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
`;

Header.Menu = Menu;
