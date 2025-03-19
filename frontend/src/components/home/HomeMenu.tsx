"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../ui/Logo';
import './HomeMenu.scss';
import { faArrowRightFromBracket, faHouse, faSearch, faUserAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../ui/Input';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { NavItem } from '../nav/NavItem';

type Props = {
    closeAction: () => void
}
export const HomeMenu = ({ closeAction }: Props) => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    const handleEnter = () => {
        router.push(`/search?q=${searchValue}`);
    };

    return (
        <div className="home-menu">
            <div className="header">
                <Logo size={24} />

                <div className="circle-btn" onClick={() => closeAction()}>
                    <FontAwesomeIcon icon={faX} />
                </div>
            </div>

            <div className="search-bar">
                <Input
                    filled
                    icon={faSearch}
                    placeholder='Search'
                    value={searchValue}
                    onChangeInput={(t) => setSearchValue(t)}
                    onEnter={handleEnter}
                />
            </div>

            <div className="nav-area">
                <NavItem
                    href='/home'
                    label='Home'
                    icon={faHouse}
                />
                <NavItem
                    href='/myprofile'
                    label='My Profile'
                    icon={faUserAlt}
                />
                <NavItem
                    href='/logout'
                    label='Logout'
                    icon={faArrowRightFromBracket}
                />
            </div>
        </div>
    );
};