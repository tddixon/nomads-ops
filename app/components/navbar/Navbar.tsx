"use client";

import Link from "next/link";

import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  useSession;
  const { status, data: session } = useSession();

  return (
    <div className="flex flex-row justify-between navbar bg-base-100">
      <div className="flex-1">
        <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            {status === "loading" && <span>...Loading...</span>}
            {status === "authenticated" && (
              <Link href="/profile">{session.user!.name}</Link>
            )}

            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
