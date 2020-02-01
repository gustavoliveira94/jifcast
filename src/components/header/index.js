/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Header as HeaderUp } from '../../styles/header';
import Container from '../../styles/container';

const Header = () => {
    const router = useRouter();

    const notification = 12;
    const downloads = 16;

    return (
        <HeaderUp>
            <Container flex="space-between" align="center" height="100%">
                <Link href={router.pathname === '/page' ? '/' : '/page'}>
                    <a>
                        <h1>jifcast</h1>
                    </a>
                </Link>
                <HeaderUp.Menu>
                    <ul>
                        <div>
                            <img
                                src="/assets/img/feed-active.svg"
                                alt="refresh"
                            />
                            <p>refresh</p>
                        </div>
                        <div>
                            <img src="/assets/img/mic.svg" alt="refresh" />
                            <p>discover</p>
                        </div>
                        <div>
                            <span>{notification}</span>
                            <img src="/assets/img/Path.svg" alt="refresh" />
                            <p>notifications</p>
                        </div>
                        <div>
                            <img src="/assets/img/username.png" alt="refresh" />
                            <p>Gustavo</p>
                        </div>
                    </ul>
                </HeaderUp.Menu>
            </Container>
            <HeaderUp>
                <h2>Downloads</h2>
                <div>
                    <img src="/assets/img/downloads.svg" alt="downloads" />
                    <span>{downloads}</span>
                </div>
            </HeaderUp>
        </HeaderUp>
    );
};

export default Header;
