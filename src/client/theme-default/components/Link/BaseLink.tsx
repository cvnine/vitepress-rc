import React, { FC } from 'react'

interface BaseLinkProps {
	to: string
}

export const BaseLink: FC<BaseLinkProps> = (props) => {
	return <a href={props.to}>{props.children}</a>
}
