import type { Alias } from 'vite';
import type { IPluginTransformer } from '../../index';
interface PluginProps {
    id: string;
    alias: Alias[];
}
export default function plugin({ id, alias }: PluginProps): IPluginTransformer;
export {};
