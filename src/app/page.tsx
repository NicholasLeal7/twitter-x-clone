import { Logo } from "@/components/ui/Logo";
import { redirect } from "next/navigation";

export default function Page() {

  redirect('/home');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Logo size={80} />
    </div>
  );
}
