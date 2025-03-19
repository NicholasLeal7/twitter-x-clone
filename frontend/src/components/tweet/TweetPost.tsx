"use client";

import Link from 'next/link';
import './TweetPost.scss';
import { Button } from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { user } from '@/data/user';

export const TweetPost = () => {
    return (
        <div className="tweet-post">
            <Link href={`/${user.slug}`}>
                <img src={user.avatar} alt={user.slug} />
            </Link>

            <div className="content">
                <div className="type-content" contentEditable role='textbox' data-placeholder='What is happening?'></div>

                <div className="btn-area">
                    <div className="upload">
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                    <div className="send">
                        <Button
                            label='Post'
                            size='md'
                            onClickButton={() => null}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};