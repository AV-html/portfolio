import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import button from './ButtonLink.module.css'


type PropsType = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>


export function ButtonLink(props: PropsType) {
    return (
        <a href={props.href}
           className={`${props.className} ${button.button}`}
           target={props.target}
        >
            {props.children}
        </a>
    );
}