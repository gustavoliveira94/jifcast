/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
    const description =
        'This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. ';

    return (
        <>
            <Head>
                <title>This is page 2</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="jifcast playlists music" />
            </Head>
            <h1>This is page 2</h1>
            <p>{description}</p>
            <nav>
                <ul>
                    <li>
                        <Link href="https://www.facebook.com">
                            <a>Facebook</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com">
                            <a>Instagram</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.twitter.com">
                            <a>Twitter</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Page;
