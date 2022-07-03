import React from 'react';
import {Nav} from '../Nav/Nav';


import styles from './../../common/styles/container.module.css'
import header from './Header.module.css'


export function Header() {
    return (
        <header className={header.header}>
            <div className={styles.container}>
                <Nav/>
            </div>
        </header>
    );
}