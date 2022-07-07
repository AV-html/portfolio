import React from 'react';
import {Skill} from './Skill/Skill';

import skills from './Skills.module.css';
import styles from '../../../common/styles/container.module.css';
import {Subheading} from '../../Subheading/Subheading';
import {SvgJS} from '../../svg/SvgJS';
import {SvgReact} from '../../svg/SvgReact';
import {SvgRedux} from '../../svg/SvgRedux';
import {SvgTS} from '../../svg/SvgTS';
import {SvgJest} from '../../svg/SvgJest';
import {SvgHTML5} from '../../svg/SvgHTML5';
import {SvgCSS3} from '../../svg/SvgCSS3';
import {SvgGit} from '../../svg/SvgGit';


export function Skills() {
    return (
        <section id={'skills'} className={skills.skills}>
            <div className={styles.container}>
                <Subheading className={skills.subheading}>
                    Skills
                </Subheading>

                <div className={skills.case}>
                    <Skill
                        title={'React'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgReact/>
                    </Skill>
                    <Skill
                        title={'Redux'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgRedux/>
                    </Skill>
                    <Skill
                        title={'TypeScript'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgTS/>
                    </Skill>
                    <Skill
                        title={'Jest'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgJest/>
                    </Skill>
                    <Skill
                        title={'HTML5'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgHTML5/>
                    </Skill>
                    <Skill
                        title={'CSS3'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgCSS3/>
                    </Skill>
                    <Skill
                        title={'JavaScript'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgJS/>
                    </Skill>
                    <Skill
                        title={'Git'}
                        text={'Description: more more more more more text...'}
                    >
                        <SvgGit/>
                    </Skill>
                </div>
            </div>
        </section>
    );
}