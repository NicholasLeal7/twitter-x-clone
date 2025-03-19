import { TweetItem } from '@/components/tweet/TweetItem';
import './page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { tweet } from '@/data/tweet';
import { TweetPost } from '@/components/tweet/TweetPost';

export default function Page() {
    return (
        <div className='tweet-page'>
            <GeneralHeader backHref='/'>
                <div className="back">Voltar</div>
            </GeneralHeader>
            <div className="tweet">
                <TweetItem tweet={tweet} />

                <div className="reply">
                    <TweetPost />
                </div>

                <TweetItem tweet={tweet} hideComments />
                <TweetItem tweet={tweet} hideComments />
                <TweetItem tweet={tweet} hideComments />
            </div>
        </div>
    );
};