import React from 'react';

import start from './Start.module.css'
import holder from './../../../common/styles/container.module.css'

import avatar from '../../../common/static/480x640.png'
import {ButtonLink} from '../../ButtonLink/ButtonLink';

export function Start() {
    return (
        <section id={'main'} className={start.start}>
            <div className={`${holder.container} ${start.row}`}>
                <div className={start.body}>
                    <h1 className={start.heading}>
                        <span className={start.name}><span>Alexander</span> Volkov</span> <span
                        className={start.dev}>Front-end Developer</span>
                    </h1>

                    <ButtonLink href={'#contacts'}
                                className={start.link}
                    >
                        Contact with me
                    </ButtonLink>

                </div>

                <div className={start.image}>
                    <img src={avatar} alt="Alexander Volkov"/>
                </div>
            </div>
        </section>
    );
}