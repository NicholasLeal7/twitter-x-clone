"use client";

import { useState } from 'react';
import { Button } from './Button';
import './RecommendationItem.scss';
import { useRouter } from 'next/navigation';
import { User } from '@/types/user';

type Props = {
    user: User
};
export const RecommendationItem = ({ user }: Props) => {
    const router = useRouter();
    const [following, setFollowing] = useState(false);

    const handleClick = () => {
        router.push(`/${user.slug}`);
    };

    return (
        <div className="recommendation-item">
            <img src={user.avatar} alt={user.slug} onClick={handleClick} />
            <div className="user-info">
                <span className="name" onClick={handleClick}>{user.name}</span>
                <span className="slug">@{user.slug}</span>
            </div>
            <div className="follow">
                {!following &&
                    <Button
                        label='Follow'
                        onClickButton={() => setFollowing(true)}
                        size='sm'
                    />
                }
            </div>
        </div>
    );
};

export const RecommendationItemSkeleton = () => {
    return (
        <div className="recommendation-item-skeleton">
            <div className="img-skeleton"></div>
            <div className="info-skeleton">
                <div className="name"></div>
                <div className="slug"></div>
            </div>
        </div>
    );
};