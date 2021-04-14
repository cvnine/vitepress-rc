import * as React from 'react'
import { Component } from 'react'

interface IColumnProps {
	/** prop1 description */
	prop1?: string
	/**
	 * prop3 description
	 */
	prop3: () => void
	/** prop4 description */
	prop4: 'prop1' | 'prop2' | 'prop3'
	/** prop5 description "s"" 's' */
	prop5: 'prop5'
}

export interface IC extends IColumnProps {
	/** prop2 description */
	prop2: number
}

export interface IColumnPr {
	/** pros description */
	props?: string
}
function A(props: IColumnPr) {
	return '这是react A'
}

export class Column extends Component<IC, {}> {
	render() {
		return <div>这是react column</div>
	}
}

export default A
