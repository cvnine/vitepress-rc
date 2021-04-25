# Difference From Vitepress

## Code live


```jsx 

import React from 'react'

import {Breadcrumb} from 'antd'
import 'https://unpkg.com/antd@4.15.1/dist/antd.css';

const Title = () => (
 <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
)

export default Title
```


```jsx live=local

import React from 'react'
import styled from 'styled-components'
import {Button} from 'demo-c'
const A = styled.div`
  color:red;
`

const Title = () => (
 <><A>12e23</A><Button /></>
)

export default Title
```

## API

<API export="Column"></API>

