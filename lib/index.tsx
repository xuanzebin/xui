import React from 'react'
import ReactDOM from 'react-dom'

import Icon from './Icon'

ReactDOM.render(
<div>
    <Icon 
        name="jd"
        onClick={()=>{console.log('fuck')}}
    />
</div>
, document.querySelector('#root'))