'use client';

import { Button } from '@/components/ui/Button';
import './page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { user } from "@/data/user";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ProfileFeed } from '@/components/profile/ProfileFeed';
import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import { Textarea } from '@/components/ui/Textarea';

export default function Page() {
    const isMe: boolean = true;
    const [name, setName] = useState(user.name);
    const [link, setLink] = useState(user.link);
    const [bio, setBio] = useState(user.bio);

    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="general-header-name">Editar Perfil</div>
            </GeneralHeader>
            <section className='general-header-section'>
                <div className="cover" style={{
                    backgroundImage: 'url(' + user.cover + ')'
                }}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="info">
                    <img src={user.avatar} alt={user.name} />
                    <div className="pfp">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCamera} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='general-header-edit'>
                <label>
                    <p>Nome</p>
                    <Input placeholder='Digite seu nome' value={name} onChangeInput={text => setName(text)} />
                </label>
                <label>
                    <p>Bio</p>
                    <Textarea placeholder='Descreva você mesmo' rows={4} value={bio || ''} onChange={text => setBio(text)} />
                </label>
                <label>
                    <p>Link</p>
                    <Input placeholder='Digite um link' value={link || ''} onChangeInput={text => setLink(text)} />
                </label>

                <Button label='Salvar Alterações' size='lg' />
            </section>
        </div>
    );
}