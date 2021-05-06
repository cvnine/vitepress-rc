import React from 'react';
interface ILivePreview {
    Component: React.ComponentType;
}
declare function LivePreview({ Component, ...rest }: ILivePreview): JSX.Element;
declare namespace LivePreview {
    var defaultProps: {
        Component: string;
    };
}
export default LivePreview;
