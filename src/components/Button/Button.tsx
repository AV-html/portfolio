import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import button from '../../common/styles/Buttons.module.css'


type PropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const Button: React.FC<PropsType> = React.memo((
    {
        className,
        children,
        ...restProps
    }) => {
    return (
        <button
            className={`${className} ${button.button}`}
            {...restProps}
        >
            {children}
        </button>
    );
})