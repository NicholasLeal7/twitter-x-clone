"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
    const router = useRouter();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleClick = () => {
        router.replace('/home');
    };

    return (
        <>
            <Input
                value={emailValue}
                placeholder="Email"
                onChangeInput={text => setEmailValue(text)}
            />
            <Input
                value={passwordValue}
                placeholder="Password"
                password
                onChangeInput={text => setPasswordValue(text)}
                onEnter={handleClick}
            />
            <Button
                label={'Enter'}
                size={'lg'}
                onClickButton={handleClick}
            />
        </>
    );
};