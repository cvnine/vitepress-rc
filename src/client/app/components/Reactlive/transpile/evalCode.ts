import React from 'react'

const evalCode = (
	code: string,
	scope: {
		[key: string]: any
	}
) => {
	const scopeKeys = Object.keys(scope)
	const scopeValues = scopeKeys.map((key) => scope[key])

	// eslint-disable-next-line no-new-func
	const res = new Function('React', ...scopeKeys, code)
	return res(React, ...scopeValues)
}

export default evalCode