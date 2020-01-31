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
    height: 120px;
    border-bottom: 1px solid #e9f7f4;
    padding: 10px 0;
    margin-bottom: 10px;
    text-decoration: none;
`;

Music.Image = Image;
Music.Content = Content;
Music.Options = Options;
Music.Progress = Progress;
Music.Infos = Infos;

export default Music;
