/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';

import Container from '../src/styles/container';
import App from '../src/styles/app';

import Musics from '../src/components/musics';

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
        link: 'https://www.google.com',
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
        link: 'https://www.yahoo.com',
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
        link: 'https://www.amazon.com',
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
                {musics.map((music, index) => (
                    <Musics music={music} key={index} />
                ))}
            </Container>
        </App>
    </>
);

export default Home;
