'use client';

import { TweetItem } from '@/components/tweet/TweetItem';
import './Page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { Input } from "@/components/ui/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/navigation";
import { useState } from "react";
import { tweet } from '@/data/tweet';

type Props = {
    searchParams: {
        q: string | undefined;
    }
};
export default function Page({ searchParams }: Props) {
    if (!searchParams.q) redirect('/');

    const [query, setQuery] = useState(searchParams.q);

    return (
        <div>
            <GeneralHeader backHref='/'>
                <Input placeholder='Busque aqui' filled icon={faSearch} value={query} onChangeInput={q => setQuery(q)} />
            </GeneralHeader>
            <div className="search-tweet">
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
                <TweetItem tweet={tweet} />
            </div>
        </div>
    );
}