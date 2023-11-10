"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";

type Props = {};
function SideBar({}: Props) {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className=" flex-1">
        <div>
          <NewChat></NewChat>
          <div>{/* Models */}</div>
          {/* Map of Chats */}
        </div>
      </div>
      {session && (
        <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer mx-auto mb-2 hover:opacity-80"
          src={session.user?.image!}
          alt="Profile"
          width={30}
          height={30}
        />
      )}
    </div>
  );
}
export default SideBar;
