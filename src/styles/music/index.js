import styled from 'styled-components';

import Image from './image';
import Content from './content';
import Options from './options';
import Progress from './progress';
import Infos from './infos';

const Music = styled.a`
    display: flex;
    align-items: center;
    width: 550px;
    height: auto;
    border-bottom: 1px solid #e9f7f4;
    padding: 20px 0;
    margin-bottom: 10px;
    text-decoration: none;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

Music.Image = Image;
Music.Content = Content;
Music.Options = Options;
Music.Progress = Progress;
Music.Infos = Infos;

export default Music;
