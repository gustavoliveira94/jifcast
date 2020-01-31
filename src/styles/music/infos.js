import styled from 'styled-components';

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;

    div {
        display: flex;
        align-items: center;
        span {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px;
            color: #7fb0a9;
            margin-left: 7px;
        }
    }
`;

export default Infos;
