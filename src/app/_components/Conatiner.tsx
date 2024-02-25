import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = { children: ReactNode; className?: string };
export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={twMerge('mx-auto max-w-screen-lg', className)}>
            {children}
        </div>
    );
}