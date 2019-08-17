import React from 'react'
import ReactDOM from 'react-dom'

import Icon from './icon/Icon'

ReactDOM.render(
<div>
    <Icon 
        name="jd"
        onClick={()=>{console.log('hi')}}
    />
</div>
, document.querySelector('#root'))