import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number
}
export const Logo = ({ size }: Props) => {
    return (
        <Link
            href="/home"
        >
            <Image
                src="/logo.png"
                alt="X"
                width={size}
                height={size}
                quality={100}
            />
        </Link>
    );
}