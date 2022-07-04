import React from 'react';
import social from './SocialItem.module.css'


type PropsType = {
    href: string
    children: React.ReactNode
}

export function SocialItem(props: PropsType) {
    return (

        <li className={social.item}>
            <a href={props.href}
               className={social.link}
               target="_blank"
               rel="noopener noreferrer"
            >
                {props.children}
            </a>
        </li>

    );
}