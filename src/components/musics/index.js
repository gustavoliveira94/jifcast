/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Music from '../../styles/music';

const Musics = ({ music }) => {
    return (
        <Music href={music.link}>
            <Music.Image>
                <img src={music.img} alt="music" />
            </Music.Image>
            <Music.Content>
                <span>{music.artist}</span>
                <h3>{music.title}</h3>
                <p>{music.description}</p>
                <Music.Options>
                    <Music.Infos>
                        <div>
                            <img src="/assets/img/like.svg" alt="like" />
                            <span>{music.likes}</span>
                        </div>
                        <div>
                            <img src="/assets/img/listen.svg" alt="listen" />
                            <span>{music.listens}</span>
                        </div>
                        <div>
                            <img src="/assets/img/cloud.svg" alt="cloud" />
                        </div>
                    </Music.Infos>
                    <Music.Progress>
                        <progress value={music.progress} max="100" />
                        <span>{`${music.progress}%`}</span>
                    </Music.Progress>
                </Music.Options>
            </Music.Content>
        </Music>
    );
};

Musics.propTypes = {
    music: PropTypes.object.isRequired,
};

export default Musics;
