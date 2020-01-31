/* eslint-disable react/no-children-prop */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import GlobalStyle from '../src/styles/global';

import Base from '../src/components/base';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Base>
                <Component {...pageProps} />
            </Base>
            <GlobalStyle />
        </>
    );
};

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
