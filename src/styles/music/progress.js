import styled from 'styled-components';

const Progress = styled.div`
    display: flex;
    align-items: center;
    width: 172px;
    margin-top: 20px;

    progress {
        width: 130px;
        height: 5px;
        background-color: #e9f7f4;
        border-radius: 56px;
        margin-right: 16px;
    }

    span {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #7fb0a9;
    }
`;

export default Progress;
