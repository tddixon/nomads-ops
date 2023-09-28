import { getServerSession } from "next-auth";
import { Odor_Mean_Chey } from "next/font/google";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen min-w-screen">
      <div className=".rounded-xl .p-6 .bg-gray-100 .shadow-md gap-8">
        <h1 className="text-2xl text-white">Welcome to Noho</h1>
        <h3>Welcome {session && <span>{session.user!.name}</span>}</h3>
        <Link href="/api/auth/signin">Sign In</Link>
      </div>
    </div>
  );
}
