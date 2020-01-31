import React from 'react';
import Head from 'next/head';

import Container from '../src/styles/container';
import App from '../src/styles/app';
import Music from '../src/styles/music';

const musics = [
    {
        artist: 'JorRogan',
        title: 'JRE MMA Show #75 with Dan Hardy',
        description:
            'Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy.',
        likes: 84,
        listens: 96,
        progress: 48,
        img: '/assets/img/music1.png',
    },
    {
        artist: 'myfavoritemurder',
        title: 'MFM Minisode 13',
        description:
            'This week’s hometowns include serial killer connections and an acid trip discovery.',
        likes: 43,
        listens: 87,
        progress: 79,
        img: '/assets/img/music2.png',
    },
    {
        artist: 'JorRogan',
        title: 'JRE MMA Show #75 with Dan Hardy',
        description:
            'Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy.',
        likes: 84,
        listens: 96,
        progress: 48,
        img: '/assets/img/music1.png',
    },
];

const Home = () => (
    <>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <App>
            <Container height="100%" direction="column">
                <h2>Playlists</h2>
                {musics.map(music => (
                    <Music>
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
                                        <img
                                            src="/assets/img/like.svg"
                                            alt="like"
                                        />
                                        <span>{music.likes}</span>
                                    </div>
                                    <div>
                                        <img
                                            src="/assets/img/listen.svg"
                                            alt="listen"
                                        />
                                        <span>{music.listens}</span>
                                    </div>
                                    <div>
                                        <img
                                            src="/assets/img/cloud.svg"
                                            alt="cloud"
                                        />
                                    </div>
                                </Music.Infos>
                                <Music.Progress>
                                    <progress
                                        value={music.progress}
                                        max="100"
                                    />
                                    <span>{`${music.progress}%`}</span>
                                </Music.Progress>
                            </Music.Options>
                        </Music.Content>
                    </Music>
                ))}
            </Container>
        </App>
    </>
);

export default Home;
