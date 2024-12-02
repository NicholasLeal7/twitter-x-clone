import { user } from '@/data/user';
import './RecommendationArea.scss';
import { RecommendationItem, RecommendationItemSkeleton } from './RecommendationItem';

export const RecommendationArea = () => {
    return (
        <div className="recommendation-area">
            <h2>
                Who follows
            </h2>
            <div className="items">
                <RecommendationItem user={user} />
                <RecommendationItemSkeleton />
            </div>
        </div>
    );
};