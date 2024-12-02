import './NavMyProfile.scss';
import Link from "next/link";
import { user } from '@/data/user';

type Props = {
    href: string
    name: string,
    slug: string,
    pfp: string,
}
export const NavMyProfile = () => {
    return (
        <Link
            href={`/${user.slug}`}
            className="nav-my-profile"
        >
            <img src={user.avatar} alt={user.slug} />
            <div className="my-profile-content">
                <span className="name">{user.name}</span>
                <span className="slug">@{user.slug}</span>
            </div>
        </Link>
    );
};