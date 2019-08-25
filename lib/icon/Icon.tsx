import React from 'react'

import './importIcons'
import './Icon.scss'

import classes from '../helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}


function ccc() {
    console.log(1)
}
ccc()
const Icon:React.FunctionComponent<IconProps> = (props) => {
    let {className, name, ...restProps} = props
    return (
        <span>
            <svg
                className= {`${classes('xui-icon',className)}`}
                {...restProps}
            >
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
}

export default Icon