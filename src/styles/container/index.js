import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.flex};
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
    max-width: 1200px;
    width: 100%;
    height: ${props => props.height};

    h2 {
        margin-bottom: 60px;

        @media screen and (max-width: 600px) {
            display: none;
        }
    }
`;

export default Container;
