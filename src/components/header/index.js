import React from 'react';

import { Header as HeaderUp } from '../../styles/header';
import Container from '../../styles/container';

const Header = () => {
    const notification = 12;

    return (
        <HeaderUp>
            <Container flex="space-between" align="center" height="100%">
                <h1>jifcast</h1>
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
        </HeaderUp>
    );
};

export default Header;
