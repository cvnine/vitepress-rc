export interface IContext {
    code: string;
    disabled: boolean;
    error: string | null;
    shadowRoot?: React.MutableRefObject<ShadowRoot | null>;
    onChange: (code: string) => void;
}
declare const LiveContext: import("react").Context<IContext>;
export default LiveContext;
