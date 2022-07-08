import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

import styles from '../../common/styles/Input.module.css'


type PropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChangeText?: (text: string) => void
    errorClass?: string
}

export const Input = React.memo((
        {
            className,
            onChange,
            onChangeText,
            errorClass,
            ...restProps
        }: PropsType
    ) => {


        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)
            onChangeText && onChangeText(e.currentTarget.value)
        }

        const fullClassName = errorClass ? `${styles.input} ${className} ${styles.errorClass}` : `${styles.input} ${className}`

        return (
            <input {...restProps}
                   className={fullClassName}
                   onChange={onChangeHandler}
            />
        );
    }
)