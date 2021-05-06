import React from 'react';
import ReactDom from 'react-dom';
import { StyleSheetManager } from 'styled-components';
export declare function getReact(local?: boolean): Promise<typeof React>;
export declare function getReactDom(local?: boolean): Promise<typeof ReactDom>;
export declare function getStyleSheetManager(local?: boolean): Promise<typeof StyleSheetManager>;
