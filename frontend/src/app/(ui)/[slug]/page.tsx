import { Button } from '@/components/ui/Button';
import './page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { user } from "@/data/user";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ProfileFeed } from '@/components/profile/ProfileFeed';

export default function Page() {
    const isMe: boolean = true;

    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="general-header-name">{user.name}</div>
                <div className="general-header-count">{user.postCount} posts</div>
            </GeneralHeader>
            <section className='general-header-section'>
                <div className="cover" style={{
                    backgroundImage: 'url(' + user.cover + ')'
                }}></div>
                <div className="info">
                    <img src={user.avatar} alt={user.name} />
                    <div className="btn-profile">
                        {
                            isMe &&
                            <Link href={`/${user.slug}/edit`}>
                                <Button label='Editar Perfil' size='md' />
                            </Link>
                        }
                        {
                            !isMe &&
                            <Button label='Seguir' size='md' />
                        }
                    </div>
                </div>
                <div className="info-content">
                    <div className="name">{user.name}</div>
                    <div className="slug">@{user.slug}</div>
                    <div className="bio">{user.bio}</div>
                    {user.link &&
                        <div className='icon'>
                            <FontAwesomeIcon icon={faLink} />
                            <Link href={user.link} target="_blank">{user.link}</Link>
                        </div>
                    }
                    <div className="follow">
                        <div className=""><span>99</span> Seguindo</div>
                        <div className=""><span>99</span> Seguidores</div>
                    </div>
                </div>
            </section>
            <ProfileFeed />
        </div>
    );
}