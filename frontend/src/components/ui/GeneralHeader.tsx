import Link from 'next/link';
import './GeneralHeader.scss';
import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {
    children: ReactNode;
    backHref: string
}
export const GeneralHeader = ({ children, backHref }: Props) => {
    return (
        <header className='general-header'>
            <Link href={backHref}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className='content'>
                {children}
            </div>
        </header>
    );
};