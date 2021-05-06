import type { IPluginTransformer } from '../index';
interface PluginProps {
    id: string;
}
export default function plugin({ id }: PluginProps): IPluginTransformer;
export {};
