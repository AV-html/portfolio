import React from 'react';
import subheading from './Subheading.module.css';

type PropsType = {
    children: React.ReactNode
    className?: string
}


export const Subheading: React.FC<PropsType> = React.memo(({children, className}) => {
    return (
        <h2 className={`${className} ${subheading.subheading}`}>
            <span className={subheading.text}>
                <span className={subheading.line}></span>
                {children}
            </span>
        </h2>
    );
})