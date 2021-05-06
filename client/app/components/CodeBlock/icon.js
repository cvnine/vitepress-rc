import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const SvgWrap = styled.svg `
	color: #7f7c8e;
	cursor: pointer;
	&:hover {
		color: #555;
	}
`;
export const CopyIcon = ({ onClick }) => {
    return (_jsx("span", Object.assign({ onClick: onClick, title: "\u590D\u5236" }, { children: _jsx(SvgWrap, Object.assign({ "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", "p-id": "799", viewBox: "0 0 1024 1024", width: "18", height: "18" }, { children: _jsx("path", { d: "M515.781628 328.34212l0 96.938819 86.571704 0L515.781628 328.34212zM614.882694 898.001331c6.27389-6.274914 10.251481-14.82566 10.251481-24.51944l0-396.306025L510.076696 477.175867l0 0c-12.530384 0-23.920806-5.134951-32.464389-13.687744l0 0c-7.973602-8.552793-13.109576-19.962657-13.109576-32.493042L464.502731 315.793316 228.683864 315.793316l0 0c-9.6815 0-18.225083 3.997034-24.490787 10.252505l0 0c-6.264681 6.294356-9.691733 14.826684-9.691733 24.51944l0 522.916631c0 9.69378 3.427052 18.244526 9.691733 24.51944 6.265704 6.275937 14.808264 10.270924 24.490787 10.270924l0 0 361.718275 0 0 0C600.07443 908.272255 608.627223 904.277268 614.882694 898.001331L614.882694 898.001331zM167.732677 289.555745c15.947204-15.387455 37.59934-25.079188 60.951187-25.079188l301.326836 0 2.858094 0 1.698688 1.719154 140.706649 161.364131 1.137916 1.13894 0 2.296299 0 442.48681c0 23.959691-9.691733 45.62206-25.058722 61.029982l0 0c-15.387455 15.385409-37.030381 25.078165-60.951187 25.078165l-361.718275 0c-23.350824 0-45.00296-9.692756-60.951187-25.078165-15.377222-15.407921-25.059745-37.07029-25.059745-61.029982L142.672932 350.565261C142.672932 326.623989 152.355455 305.540811 167.732677 289.555745L167.732677 289.555745zM716.859249 127.033231l0 96.957239 86.570681 0L716.859249 127.033231zM429.761486 63.166645l301.326836 0 2.858094 0 1.698688 2.278903 140.706649 160.823825 1.13894 1.699712 0 1.718131 0 442.507276c0 23.958668-9.691733 45.620014-25.060769 61.007469-15.966647 15.966647-37.030381 25.097608-60.951187 25.097608l0 0-60.391439 0.560772 0 0c-6.833639 0-13.668301-3.417843-18.226107-7.974625l0 0c-4.555759-4.555759-7.393387-10.829649-7.393387-18.243503l0 0c0-6.854105 2.836605-13.688767 7.393387-18.24555l0 0c4.556783-4.575202 11.392468-7.41283 18.226107-7.41283l0 0 60.391439 0 0 0c9.67229 0 18.226107-3.996011 24.480554-10.270924 6.274914-6.275937 10.253528-14.827707 10.253528-24.518417L826.21282 275.886421 711.16455 275.886421l0 0c-12.549827 0-23.941272-5.134951-32.473599-13.707187-8.552793-7.973602-13.668301-19.944238-13.668301-32.493042L665.022651 115.062596 429.761486 115.062596l0 0c-9.6815 0-18.226107 3.437286-24.490787 9.691733-6.274914 6.294356-10.260691 14.827707-10.260691 24.51944l0 60.468187c0 7.413853-2.847861 13.669324-7.404644 18.226107-4.556783 4.575202-10.821463 7.413853-18.226107 7.413853l0 0c-6.834662 0-13.668301-2.838651-18.225083-7.413853-4.555759-4.556783-7.40362-11.390421-7.40362-18.226107l0-60.468187c0-23.361057 9.682523-45.042869 25.058722-61.009516l0 0C384.757502 72.858378 405.84068 63.166645 429.761486 63.166645L429.761486 63.166645z", "p-id": "800", fill: "currentColor" }, void 0) }), void 0) }), void 0));
};
export const CopyOk = () => {
    return (_jsx("span", { children: _jsx("svg", Object.assign({ viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "2561", width: "18", height: "18" }, { children: _jsx("path", { d: "M951.629227 209.968106c4.562922 5.14109 7.402597 11.423167 7.402597 18.274202 0 3.420913-0.559748 6.841825-1.700735 9.701966-0.579191 1.710968-1.13894 2.850931-2.28095 3.990894l0.559748 0.571005-3.419889 4.001127L408.727427 809.944809l-1.700735 2.299369-0.580215 0c-1.700735 1.701758-3.981684 2.841721-6.262634 3.982708-2.860141 1.139963-6.261611 1.720178-9.701966 1.720178l0 0c-3.981684 0-6.842849-0.579191-10.244318-1.720178-2.860141-1.139963-5.721305-3.420913-8.001231-5.701862l0 0L70.006935 508.535085l0 0c-2.28095-2.28095-4.002151-5.140067-5.122671-8.562003l0 0c-1.720178-2.850931-2.28095-6.281053-2.28095-9.701966l0 0 0 0c0-7.42204 2.840698-13.703093 7.402597-18.274202 5.121648-4.561899 11.403724-7.42204 18.264992-7.42204l0 0c3.40147 0 6.841825 0.571005 10.244318 1.720178l0 0c2.859118 1.139963 5.720282 3.420913 8.001231 5.701862l0 0 283.405675 283.153942L914.558937 210.538087l5.700839-5.701862 0.560772 1.140986c1.140986-0.571005 1.720178-1.140986 2.28095-1.140986 3.420913-1.720178 6.842849-2.290159 10.283204-2.290159l0 0C940.787298 202.546066 947.068352 205.406207 951.629227 209.968106L951.629227 209.968106z", "p-id": "2562", fill: "#1afa29" }, void 0) }), void 0) }, void 0));
};
export const CodeIcon = ({ onClick }) => {
    return (_jsx("span", Object.assign({ onClick: onClick, title: "\u4EE3\u7801" }, { children: _jsx(SvgWrap, Object.assign({ viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "939", width: "18", height: "18" }, { children: _jsx("path", { d: "M666.627 296.882c-12.496-12.497-12.496-32.758 0-45.255 12.497-12.496 32.758-12.496 45.255 0L949.47 489.215c12.497 12.497 12.497 32.758 0 45.255L711.882 772.058c-12.497 12.497-32.758 12.497-45.255 0-12.496-12.497-12.496-32.758 0-45.255L875.931 517.5a8 8 0 0 0 0-11.314L666.627 296.882zM147.167 517.5L356.47 726.803c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L73.627 534.47c-12.496-12.497-12.496-32.758 0-45.255l237.588-237.588c12.497-12.496 32.758-12.496 45.255 0 12.497 12.497 12.497 32.758 0 45.255L147.167 506.186a8 8 0 0 0 0 11.314zM580.4 215.198c17.22 3.976 27.957 21.159 23.981 38.379L481.558 785.583c-3.975 17.22-21.158 27.957-38.378 23.981-17.22-3.975-27.957-21.158-23.982-38.378L542.022 239.18c3.975-17.22 21.158-27.957 38.378-23.982z", "p-id": "940", fill: "currentColor" }, void 0) }), void 0) }), void 0));
};
export const SandboxIcon = ({ onClick }) => {
    return (_jsx("span", Object.assign({ onClick: onClick, title: "sandbox" }, { children: _jsx(SvgWrap, Object.assign({ viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "1083", width: "18", height: "18" }, { children: _jsx("path", { d: "M722.773 189.867l0.427-0.214h0.213L512 68.267 300.693 189.653h-0.213l0.747 0.32-173.76 100.16v443.734L512 955.733l384.533-221.866V290.133l-173.76-100.266z m-242.026 675.84L328.107 777.6V628.693l-138.24-78.506v-186.56l290.88 167.786v334.294zM219.947 308.8l143.68-82.987 148.16 85.014L660.16 225.6l144.213 83.2-292.16 168.533L219.947 308.8z m614.186 241.92l-137.386 77.973v148.374L543.253 865.6V531.627l290.88-167.787v186.88z", "p-id": "1084", fill: "currentColor" }, void 0) }), void 0) }), void 0));
};
export const RestoreIcon = ({ onClick }) => {
    return (_jsx("span", Object.assign({ onClick: onClick, title: "\u91CD\u8F7D" }, { children: _jsx(SvgWrap, Object.assign({ viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "3248", width: "18", height: "18" }, { children: _jsx("path", { d: "M258.56 681.36l-12.704 44.288a16 16 0 0 1-7.616 9.584l-24.752 13.712a14.464 14.464 0 0 1-20.928-16.64l38.128-132.96a11.136 11.136 0 0 1 13.76-7.632l132.976 38.128a14.464 14.464 0 0 1 3.04 26.56l-24.768 13.712a16 16 0 0 1-12.16 1.392l-42.016-12.048a264.112 264.112 0 0 0 468.112-41.76 14.288 14.288 0 0 1 3.296-4.912 263.424 263.424 0 0 0 16.768-92.784c0-90.496-45.536-170.368-114.96-217.92a264.112 264.112 0 0 0-393.808 118.8 14.336 14.336 0 0 1-17.968 8.16l-20.256-7.024a12.352 12.352 0 0 1-7.456-16.192A312.112 312.112 0 0 1 525.696 208c66.112 0 128.256 20.752 179.44 56.736a313.12 313.12 0 0 1 108.656 135.312 311.04 311.04 0 0 1 23.904 119.952c0 172.32-139.68 312-312 312v-0.208h-0.832c-110.96 0-210.768-59.296-266.304-150.432z", "p-id": "3249", fill: "currentColor" }, void 0) }), void 0) }), void 0));
};
