import { ReactElement, useState } from 'react';

import DarkTheme from './DarkTheme';

const loadDarkMode = () => {
    // When pre rendering on the server
    if (typeof localStorage === 'undefined') {
        return false;
    }

    const value = localStorage.getItem('darkMode');

    return value === null ? false : Boolean(JSON.parse(value));
};

export const ThemeSwitch = (): ReactElement => {
    const [darkMode, setDarkMode] = useState<boolean>(loadDarkMode);

    const handleClick = () => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode((darkMode) => !darkMode);
    };

    const text = darkMode ? 'Light Mode' : 'Dark Mode';

    return (
        <>
            <button onClick={handleClick} suppressHydrationWarning>
                {text}
            </button>

            <style jsx>
                {`
                    button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: inherit;
                    }
                `}
            </style>

            {darkMode && <DarkTheme />}
        </>
    );
};
