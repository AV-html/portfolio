import React, {AnchorHTMLAttributes, DetailedHTMLProps} from 'react';
import button from '../../common/styles/Buttons.module.css'


type PropsType = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>


export function ButtonLink({className, children, target, ...restProps}: PropsType) {
    return (
        <a
            className={`${className} ${button.button}`}
            {...restProps}
        >
            {children}
        </a>
    );
}