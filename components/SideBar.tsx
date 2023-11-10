"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import Image from "next/image";
import { db } from "@/utils/firebase";
import ChatRow from "./ChatRow";

type Props = {};
function SideBar({}: Props) {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className=" flex-1">
        <div>
          <NewChat></NewChat>
          <div>{/* Models */}</div>
          {/* Map of Chats */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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
