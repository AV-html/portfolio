import React from 'react';

import main from './Main.module.css'
import {Start} from './Start/Start';

export function Main() {
    return (
        <main className={main.main}>
            <Start/>
        </main>
    );
}