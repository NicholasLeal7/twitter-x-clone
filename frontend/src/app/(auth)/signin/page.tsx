import { SignInForm } from '@/components/auth/SignInForm';
import './page.scss';
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="login-wrapper">
            <Logo size={80} />
            <h1>Enter in you account</h1>
            <div className="form-login">
                <SignInForm />
            </div>
            <div className="signup">
                <span>Don't have an account yet?</span>
                <Link
                    href={'/signup'}
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
}