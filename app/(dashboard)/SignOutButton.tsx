'use client'
import { useClerk } from '@clerk/nextjs';
import {Button} from "@/components/ui/button";

export default function SignOutButton () {
    const { signOut } = useClerk();

    return (
        <div>
            Yetkisiz Giriş
            <Button onClick={() => signOut({redirectUrl: '/'})}>
                Sign out
            </Button>
        </div>
    );
};