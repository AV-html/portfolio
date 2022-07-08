import React from 'react';

import project from './Project.module.css'
import blocks from './../../../../common/styles/blocks.module.css'
import {ButtonLink} from '../../../ButtonLink/ButtonLink';

type PropsType = {
    preview: string
    title: string
    description: string
    linkToProject: string
}

export function Project(props: PropsType) {
    return (
        <div className={project.column}>
            <article className={project.project}>
                <div className={project.image}>
                    {props.preview}
                    {/*<img src="" alt=""/>*/}
                    <ButtonLink
                        href={props.linkToProject}
                        className={project.button}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        View
                    </ButtonLink>
                </div>
                <div className={project.body}>
                    <h3 className={`${project.title} ${blocks.title}`}>
                        {props.title}
                    </h3>
                    <p className={`${project.desc} ${blocks.text}`}>
                        {props.description}
                    </p>
                </div>
            </article>
        </div>
    );
}