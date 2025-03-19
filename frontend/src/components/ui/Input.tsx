"use client";

import { useState } from 'react';
import './Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
    value: string,
    placeholder: string,
    onChangeInput: (evt: string) => void,
    onEnter?: () => void,
    password?: boolean,
    filled?: boolean,
    icon?: IconDefinition,
}
export const Input = ({ value, placeholder, password, filled, icon, onChangeInput, onEnter }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (onEnter && evt.code.toLowerCase() === 'enter') {
            onEnter();
        }
    };

    return (
        <div className={`input-box ${filled ? 'filled' : ''}`}>
            {icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className='icon'
                />
            }
            <input
                value={value}
                type={password && !showPassword ? 'password' : 'text'}
                placeholder={placeholder}
                onChange={evt => onChangeInput(evt.target.value)}
                onKeyUp={handleKeyUp}
            />
            {password &&
                <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className='icon'
                    onClick={handleShowPassword}
                />
            }
        </div>
    );
};