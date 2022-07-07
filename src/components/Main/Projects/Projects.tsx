import React from 'react';

import projects from './Projects.module.css'
import styles from './../../../common/styles/container.module.css'
import {Subheading} from '../../Subheading/Subheading';
import {Project} from './Project/Project';


export function Projects() {
    return (
        <section id={'projects'} className={projects.projects}>
            <div className={styles.container}>
                <Subheading className={projects.subheading}>
                    Projects
                </Subheading>
                <div className={projects.case}>
                    <Project title={'Todolist'}
                             description={'Description: more more more text...'}
                             preview={'test'}
                             linkToProject={'https://github.com/AV-html/todolist'}
                    />
                    <Project title={'Counter'}
                             description={'Description: more more more text...'}
                             preview={'test'}
                             linkToProject={'https://github.com/AV-html/clicker-counter'}
                    />
                    <Project title={'Social Network'}
                             description={'Description: more more more text...'}
                             preview={'test'}
                             linkToProject={'https://github.com/AV-html/samurai-way'}
                    />
                </div>
            </div>
        </section>
    );
}