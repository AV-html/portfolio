import React from 'react';
import button from './ButtonLink.module.css'

type PropsType = {
    href: string
    className: string
    children: React.ReactNode
}

export function ButtonLink(props: PropsType) {
    return (
        <a href={props.href} className={`${props.className} ${button.button}`}>
            {props.children}
        </a>
    );
}