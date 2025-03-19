import { Logo } from '@/components/ui/Logo';
import './layout.scss';
import { ReactNode } from 'react';
import { NavItem } from '@/components/nav/NavItem';
import { faArrowRightFromBracket, faHouse, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { NavMyProfile } from '@/components/nav/NavMyProfile';
import { SearchBar } from '@/components/ui/SearchBar';
import { TrendingArea } from '@/components/ui/TrendingArea';
import { RecommendationArea } from '@/components/ui/RecommendationArea';

type Props = {
    children: ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <main>
            <nav>
                <div className="top">
                    <Logo size={24} />
                    <div className="navigation">
                        <NavItem
                            href='/home'
                            label='Home'
                            icon={faHouse}
                        />
                        <NavItem
                            href='/profile'
                            label='My Profile'
                            icon={faUserAlt}
                        />
                    </div>
                </div>
                <div className="bottom">
                    <NavItem
                        href='/logout'
                        label='Logout'
                        icon={faArrowRightFromBracket}
                    />
                    <NavMyProfile />
                </div>
            </nav>
            <section>
                {children}
            </section>
            <aside>
                <SearchBar />
                <TrendingArea />
                <RecommendationArea />
            </aside>
        </main>
    );
}