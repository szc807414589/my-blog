import React from 'react'
import {Button} from 'antd'

const Link = ({active, children, onClick}) => {
	return(
		<Button
			onClick={onClick}
			disabled={active}
			style={{marginLeft: '10px', marginTop: '20px'}}
		>
			{children}
		</Button>
	)
}

export default Link