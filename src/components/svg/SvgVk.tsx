import React from 'react';

import svg from './SvgVk.module.css'


SvgVk.defaultProps = {
    baseColor: '#292929'
}

type PropsType = {
    baseColor?: string
}

export function SvgVk({baseColor}: PropsType) {

    return (
        <svg className={svg.svg} width="48" height="48" fill="none" viewBox="0 0 48 48">
            <path fill={baseColor}
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm9.529 34.154c-1.125-3.512-3.93-6.228-7.639-6.597v6.597h-.572c-10.09 0-15.847-6.93-16.087-18.462h5.056c.166 8.464 3.892 12.05 6.844 12.789V15.692h4.76v7.3c2.916-.314 5.978-3.64 7.011-7.3h4.76c-.792 4.51-4.114 7.835-6.476 9.203 2.361 1.109 6.144 4.01 7.583 9.259h-5.24z"/>
        </svg>
    );
}