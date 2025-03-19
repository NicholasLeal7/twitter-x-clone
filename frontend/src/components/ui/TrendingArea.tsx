import './TrendingArea.scss';
import { TrendingItem, TrendingItemSkeleton } from './TrendingItem';

export const TrendingArea = () => {
    return (
        <div className="trending-area">
            <h2>
                What is happening
            </h2>
            <div className="items">
                <TrendingItem
                    label={'#ElonMusk'}
                    count={244}
                />
                <TrendingItem
                    label={'#ElonMusk'}
                    count={244}
                />
                <TrendingItemSkeleton />
                <TrendingItemSkeleton />
            </div>
        </div>
    );
};