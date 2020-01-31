import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />
                    <meta
                        name="description"
                        content="This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. "
                    />
                    <meta name="keywords" content="jifcast playlists music" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
