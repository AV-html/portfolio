import React from 'react';

import nav from './Nav.module.css'


export function Nav() {
    return (
        <nav className={nav.nav}>
            <ul className={nav.menu}>
                <li className={nav.point}>
                    <a href="#main" className={nav.anchor}>Main</a>
                </li>
                <li className={nav.point}>
                    <a href="#skills" className={nav.anchor}>Skills</a>
                </li>
                <li className={nav.point}>
                    <a href="#projects" className={nav.anchor}>Projects</a>
                </li>
                <li className={nav.point}>
                    <a href="#contacts" className={nav.anchor}>Contacts</a>
                </li>
            </ul>
        </nav>
    );
}