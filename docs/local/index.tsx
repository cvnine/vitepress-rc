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
	/**
	 * 可以这样写属性描述
	 * @default           支持定义默认值
	 */
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
	const [x, setX] = React.useState(1)
	return <div>{x} --- 1</div>
}

export class Column extends Component<IC, {}> {
	render() {
		return <div>这是react column</div>
	}
}

export default A
