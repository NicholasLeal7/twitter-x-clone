"use client";

import { useRouter } from 'next/navigation';
import './TrendingItem.scss';

type Props = {
    label: string,
    count: number
}
export const TrendingItem = ({ label, count }: Props) => {
    const router = useRouter();

    const handleClick = () => {
        router.replace(`/search?q=${encodeURIComponent(label)}`);
    };

    return (
        <div className="trending-item" onClick={handleClick}>
            <span className="label">{label}</span>
            <span className="count">{count} posts</span>
        </div>
    );
};

export const TrendingItemSkeleton = () => {
    return (
        <div className="trending-item-skeleton">
            <div className="label"></div>
            <div className="count"></div>
        </div>
    );
};