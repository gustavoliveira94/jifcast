/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';

const Base = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

Base.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Base;
