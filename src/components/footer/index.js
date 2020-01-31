import React from 'react';

import { Footer as FooterBottom } from '../../styles/footer';
import Container from '../../styles/container';

const Footer = () => {
    return (
        <FooterBottom>
            <Container flex="flex-start">
                <p>Copyright © 2019 Jifcast.com All rights reserved.</p>
            </Container>
        </FooterBottom>
    );
};

export default Footer;
