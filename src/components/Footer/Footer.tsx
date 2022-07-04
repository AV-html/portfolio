import React from 'react';

import styles from './../../common/styles/small-container.module.css'
import footer from './Footer.module.css'
import blocks from './../../common/styles/blocks.module.css'


import {SvgHH} from '../svg/SvgHH';
import {SvgGithub} from '../svg/SvgGithub';
import {SvgTm} from '../svg/SvgTm';
import {SvgVk} from '../svg/SvgVk';


export function Footer() {
    return (
        <footer className={footer.footer}>
            <div className={styles.container}>
                <div className={footer.name}>
                    <span>Alexander</span> Volkov
                </div>
                <ul className={footer.socials}>
                    <li className={footer.item}>
                        <a href="https://hh.ru"
                           className={footer.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <SvgHH/>
                        </a>
                    </li>
                    <li className={footer.item}>
                        <a href="https://t.me/AV_html"
                           className={footer.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <SvgTm/>
                        </a>
                    </li>
                    <li className={footer.item}>
                        <a href="https://vk.com/avtofront"
                           className={footer.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <SvgVk/>
                        </a>
                    </li>
                    <li className={footer.item}>
                        <a href="https://github.com/AV-html"
                           className={footer.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <SvgGithub/>
                        </a>

                    </li>
                </ul>
                <p className={`${footer.copy} ${blocks.text}`}>
                    Copyright © 2022 All rights reserved
                </p>
            </div>
        </footer>
    );
}