import React from 'react'

export default ({ input, placeholder, type, meta: { touched } }) => (
	<div>
		<input {...input} className='uk-input' placeholder={placeholder} type={type}/>
		{touched}
	</div>
)
