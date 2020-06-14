import React from 'react'

import './importIcons'
import './Icon.scss'

import classes from '../helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props
    return (
        <span>
            <svg
                className= {`${classes('xui-icon',className)}`}
                {...restProps}
            >
                <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    )
}

export default Icon