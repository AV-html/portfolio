import React from 'react';
import skill from './Skill.module.css'


import blocks from './../../../../common/styles/blocks.module.css'

type PropsType = {
    children?: React.ReactNode
    title: string
    text: string
}

export function Skill({children, title, text}: PropsType) {
    return (
        <div className={skill.column}>
            <article className={skill.skill}>
                <div className={skill.logo}>
                    {children}
                </div>
                <h3 className={`${skill.title} ${blocks.title}`}>
                    {title}
                </h3>
                <p className={`${skill.text} ${blocks.text}`}>
                    {text}
                </p>
            </article>
        </div>
    );
}