import { NextPage } from 'next';
import Link from 'next/link';

const NavBar: NextPage = () => {
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
            <style jsx>{`
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
