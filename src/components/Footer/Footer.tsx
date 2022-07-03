import React from 'react';

import styles from './../../common/styles/small-container.module.css'
import footer from './Footer.module.css'

export function Footer() {
    return (
        <footer className={footer.footer}>
            <div className={styles.container}>
                (c) 12341
            </div>
        </footer>
    );
}