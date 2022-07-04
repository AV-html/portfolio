import React from 'react';

import styles from './../../common/styles/container.module.css'
import footer from './Footer.module.css'
import blocks from './../../common/styles/blocks.module.css'
import {Socials} from '../Socials/Socials';


export function Footer() {
    return (
        <footer className={footer.footer}>
            <div className={styles.box}>
                <div className={footer.name}>
                    <span>Alexander</span> Volkov
                </div>
                <div className={footer.holder}>
                    <Socials/>
                </div>
                <p className={`${footer.copy} ${blocks.text}`}>
                    Copyright © 2022 All rights reserved
                </p>
            </div>
        </footer>
    );
}