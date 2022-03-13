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
        </nav>
    );
};

export default NavBar;
