interface ITransform {
    code: string;
    local: boolean;
    scope: Record<string, any>;
}
interface TransformReturnType {
    result: string;
    imports: Record<string, any>;
    error?: Error;
    cssText?: string;
}
declare function transform({ code, local, scope }: ITransform): Promise<TransformReturnType>;
export default transform;
