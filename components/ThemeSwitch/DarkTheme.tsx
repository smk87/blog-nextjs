import { ReactElement } from 'react';

const DarkTheme = (): ReactElement => {
    return (
        <style jsx global>
            {`
                /* Dark Theme */
                :root {
                    --background-color: black;
                    --link-color: rgb(193, 193, 4);
                    --text-color: white;
                }
            `}
        </style>
    );
};

export default DarkTheme;
