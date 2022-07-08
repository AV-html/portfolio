import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';

import styles from './TextArea.module.css';
import input from './../../common/styles/Input.module.css'

type PropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const TextArea = React.memo(({className, children, ...restProps}: PropsType) => {
    return (
        <textarea className={`${className} ${styles.textarea} ${input.input}`}
                  {...restProps}
        >
            {children}
        </textarea>
    );
})