# Difference From Vitepress

## Code live


```jsx live

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


```jsx

import React from 'react'

import {Input} from 'antd'
import 'https://unpkg.com/antd@4.15.1/dist/antd.css';

const Title = () => (
 <Input placeholder="Basic usage" />
)

export default Title
```

## API

<API export="Column"></API>

