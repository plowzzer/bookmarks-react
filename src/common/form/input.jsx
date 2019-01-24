import React from 'react'

export default props => (
    <input {...props.input} className='uk-input' placeholder={props.placeholder} type={props.type} />
)