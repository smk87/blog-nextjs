import { ReactElement, useState } from 'react';
import DarkTheme from './DarkTheme';

const ThemeSwitch = (): ReactElement => {
    const [darkMode, setDarkMode] = useState(false);

    const text = darkMode ? 'Light Mode' : 'Dark Mode';

    return (
        <>
            <button
                onClick={() => {
                    setDarkMode((darkMode) => !darkMode);
                }}
            >
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

export default ThemeSwitch;
