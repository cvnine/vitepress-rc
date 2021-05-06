import type { FlatSidebar } from '../../hooks/useSideBar';
export default function SlugMenu({ slugs, className }: {
    slugs: Omit<FlatSidebar, 'isActive'>[];
    className?: string;
}): JSX.Element;
