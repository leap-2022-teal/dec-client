import NavBar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      Hello
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link
          href={"/auth/signin"}
          className="mt-5 px-10 py-1 rounded-sm bg-gray-200"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }: any) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Нэвтэрсэн хэрэглэгч</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        {/* <Link href={"/auth"} className="mt-5 px-10 py-1 rounded-sm bg-gray-200"></Link> */}
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "./auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
