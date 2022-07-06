import React from 'react';
import socials from './Socials.module.css'
import {SocialItem} from './SocialItem/SocialItem';
import {SvgVk} from '../svg/SvgVk';
import {SvgTm} from '../svg/SvgTm';
import {SvgGithub} from '../svg/SvgGithub';
import {SvgHH} from '../svg/SvgHH';


export function Socials() {
    return (
        <ul className={socials.socials}>
            <SocialItem href={'https://hh.ru'}>
                <SvgHH/>
            </SocialItem>

            <SocialItem href={'https://t.me/AV_html'}>
                <SvgTm/>
            </SocialItem>

            <SocialItem href={'https://vk.com/avtofront'}>
                <SvgVk/>
            </SocialItem>

            <SocialItem href={'https://github.com/AV-html'}>
                <SvgGithub/>
            </SocialItem>
        </ul>

    );
}