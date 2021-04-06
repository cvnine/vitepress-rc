import * as React from 'react'
import { Component } from 'react'

export interface IColumnProps {
	/** prop1 description */
	prop1?: string
	/** prop2 description */
	prop2: number
	/**
	 * prop3 description
	 */
	prop3: () => void
	/** prop4 description */
	prop4: 'prop1' | 'prop2' | 'prop3'
	/** prop5 description */
	prop5: 'prop0'
}

export interface IColumnPr {
	/** prs description */
	prs?: string
}
function A(props: IColumnPr) {
	return '这是react A'
}

export class Column extends Component<IColumnProps, {}> {
	render() {
		return <div>这是react column</div>
	}
}

export default A

// export class Column extends Component<IColumnProps, {}> {
// 	render() {
// 		return <div>这是react column</div>
// 	}
// }
