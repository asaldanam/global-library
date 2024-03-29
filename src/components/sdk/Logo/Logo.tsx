import { cn } from '@/lib/utils';
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({
    weight: ['400'],
    subsets: ['latin']
});

const Logo = () => {
    return <div className={cn(satisfy.className, 'text-3xl underline decoration-amber-500')}>fabula.pub</div>;
};

export default Logo;
