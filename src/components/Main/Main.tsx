import React from 'react';

import main from './Main.module.css'
import {Start} from './Start/Start';
import {Skills} from './Skills/Skills';
import {Projects} from './Projects/Projects';
import {Contacts} from './Contacts/Contacts';

export function Main() {
    return (
        <main className={main.main}>
            <Start/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </main>
    );
}