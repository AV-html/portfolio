import React from 'react';
import {Nav} from '../Nav/Nav';


import styles from './../../common/styles/container.module.css'
import header from './Header.module.css'


export const Header = React.memo(() => {
    return (
        <header className={header.header}>
            <div className={styles.container}>
                <Nav/>
            </div>
        </header>
    );
})