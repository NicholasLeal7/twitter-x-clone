"use client";

import './NavItem.scss';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type Props = {
    href: string,
    label: string,
    icon: IconDefinition
}
export const NavItem = ({ href, label, icon }: Props) => {
    const pathname = usePathname();
    const isMe = href === pathname;

    return (
        <Link
            href={href}
            className={`nav-item ${isMe ? 'active ' : ''}`}
        >
            <FontAwesomeIcon icon={icon} className="icon" />
            <span>{label}</span>
        </Link>
    );
};