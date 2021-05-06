export interface ApiProp {
    /**
     * component property name
     */
    identifier: string;
    /**
     * component property description
     */
    description?: string;
    /**
     * component property type
     */
    type: string;
    /**
     * component property default value
     */
    defaultValue?: string;
    /**
     * property whether required
     */
    required?: boolean;
}
export declare type IApiDefinition = Record<string, ApiProp[]>;
export default function Parser(filePath: string): IApiDefinition;
