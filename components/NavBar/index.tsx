import Link from 'next/link';
import { ReactElement } from 'react';

import ThemeSwitch from '../ThemeSwitch';

const NavBar = (): ReactElement => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/about">About </Link>
                </li>
                <li>
                    <Link href="/">Home </Link>
                </li>
            </ul>
            <ThemeSwitch />
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    display: inline;
                    margin-left: 0.75rem;
                }

                li:not(:first-child) {
                    margin-left: 0.75rem;
                }
            `}</style>
        </nav>
    );
};

export default NavBar;
