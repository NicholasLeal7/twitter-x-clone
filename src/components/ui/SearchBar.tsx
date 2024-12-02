"use client";

import { useState } from "react";
import { Input } from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    const handleEnter = () => {
        router.push(`/search?q=${searchValue}`);
    };

    return (
        <Input
            value={searchValue}
            onChangeInput={t => setSearchValue(t)}
            onEnter={handleEnter}
            placeholder="Search"
            icon={faSearch}
            filled
        />
    );
};