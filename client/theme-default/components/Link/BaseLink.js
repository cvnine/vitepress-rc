import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const Wrap = styled.a `
	font-weight: 500;
	font-size: 20px;
`;
export const BaseLink = (props) => {
    return _jsx(Wrap, Object.assign({ href: props.to }, { children: props.children }), void 0);
};
