"use client";

import { db } from "@/utils/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};
const NewChat = (props: Props) => {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: [session?.user?.email!],
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chats/${doc.id}`);
  };

  return (
    <div className="border border-gray-700 chatRow" onClick={createNewChat}>
      <PlusIcon className="h-4 w-4"></PlusIcon>
      <p> New Chat</p>
    </div>
  );
};
export default NewChat;
