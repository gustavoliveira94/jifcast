import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 89px);
    height: 100%;
    padding: 0 10px;

    span {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 11.2px;
        line-height: 13px;
        letter-spacing: 0.186667px;
        color: #7fb0a9;
    }

    p {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #89d8cb;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    h3 {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;
        color: #04362f;
        margin-bottom: 7px;
    }
`;

export default Content;
