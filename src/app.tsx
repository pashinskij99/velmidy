import clsx from 'clsx';
import React from 'react';
import styles from './app.module.css';
import { useHeight } from './hooks/utils.hooks';
import Main from './components/main/main';

const App: React.FC = () => {
    const height = useHeight();

    return (
        <div style={{ height }} className={clsx(styles.root)}>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <div className="tutorial-background"></div>
            <Main />
        </div>
    );
};

export { App };
