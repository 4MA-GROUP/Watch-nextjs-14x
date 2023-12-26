"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession, signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const {data} = useSession();
  const router = useRouter();
  const pathname = usePathname();
  return (
   <div>
    <h1>
      Hello world
      <button onClick={()=> data ? signOut() : signIn()} className="bg-white rounded-md px-3 text-sm">{data ? 'Logout' : 'Login'}</button>
    </h1>
   </div>
  )
}
