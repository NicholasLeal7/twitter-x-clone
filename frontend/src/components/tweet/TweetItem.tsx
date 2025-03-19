'use client';

import { Tweet } from '@/types/tweet';
import './TweetItem.scss';
import Link from 'next/link';
import { user } from '@/data/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { formatRelativeTime } from '@/utils/formatRelative';

type Props = {
    tweet: Tweet;
    hideComments?: boolean;
}
export const TweetItem = ({ tweet, hideComments }: Props) => {
    const [liked, setLiked] = useState(tweet.liked);

    const handleLikeButton = () => {
        setLiked(!liked);
    };

    return (
        <div className='tweet-item'>
            <Link href={`/${user.slug}`}>
                <img src={user.avatar} alt={user.slug} />
            </Link>

            <div className="content">
                <div className="user-info">
                    <div className="name">
                        <Link href={`/${tweet.user.slug}`}>
                            {tweet.user.name}
                        </Link>
                    </div>
                    <div className="slug">@{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}</div>
                </div>
                <div className="text">
                    {tweet.body}
                </div>
                {tweet.image &&
                    <div className="img">
                        <img src={tweet.image} alt="" />
                    </div>
                }
                <div className="btn-area">
                    {!hideComments &&
                        <div className="field">
                            <Link href={`tweet/${tweet.id}`}>
                                <div className="field-inline">
                                    <FontAwesomeIcon icon={faComment} />
                                    <div className="">{tweet.commentCount}</div>
                                </div>
                            </Link>
                        </div>
                    }
                    <div className="field">
                        <Link href={`tweet/${tweet.id}`}>
                            <div className="field-inline">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="">{tweet.retweetCount}</div>
                            </div>
                        </Link>
                    </div>
                    <div className="field">
                        <div onClick={handleLikeButton} className={`field-inline ${liked && 'liked'}`}>
                            <FontAwesomeIcon icon={liked ? faHeartFilled : faHeart} />
                            <div className="">{tweet.likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};