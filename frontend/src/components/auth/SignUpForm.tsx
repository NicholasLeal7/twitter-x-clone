"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
    const router = useRouter();
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleClick = () => {
        router.replace('/home');
    };

    return (
        <>
            <Input
                value={usernameValue}
                placeholder="Username"
                onChangeInput={text => setUsernameValue(text)}
            />
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
            />
            <Button
                label={'Create Account'}
                size={'lg'}
                onClickButton={handleClick}
            />
        </>
    );
};