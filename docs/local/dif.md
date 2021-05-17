# Difference From Vitepress

## Code live


```jsx live

import React, {useState}  from 'react'

// import {Breadcrumb} from 'antd'
// import 'https://unpkg.com/antd@4.15.1/dist/antd.css';

const Title = () => {
	const [val,setVal] = useState(null)
 return <div>123</div>
}

export default Title
```


```jsx live=local

import React from 'react'
import styled from 'styled-components'
import {Button} from 'demo-c'
const A = styled.div`
  color:red;
`

const Title = () => {
const [val,setVal] = React.useState(null)

 return <><A>test</A><Button /></>
}

export default Title
```

## API

<API export="Column"></API>

