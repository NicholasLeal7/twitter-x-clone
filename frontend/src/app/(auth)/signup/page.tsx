import { SignUpForm } from '@/components/auth/SignUpForm';
import './page.scss';
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="register-wrapper">
            <Logo size={80} />
            <h1>Create your account</h1>
            <div className="form-register">
                <SignUpForm />
            </div>
            <div className="signin">
                <span>Already have an account?</span>
                <Link
                    href={'/signin'}
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}