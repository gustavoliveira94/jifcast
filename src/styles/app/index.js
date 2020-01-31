import styled from 'styled-components';

const App = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 168px);
    padding: 45px 20px;

    @media screen and (max-width: 600px) {
        height: auto;
        padding: 20px;
    }
`;

export default App;
