import axios from "axios";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
export default function User() {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, { headers: { Authorization: token ? `Bearer ${token}` : "" } })
        .then((res: any) => setUser(res.data))
        .catch((res) => {
          const { status } = res;
          if (status === 403) {
            setUser(null);
          }
        });
    }
  }, []);
  function handleLogOut() {
    localStorage.removeItem("loginToken");
    router.push("/");
  }
  return (
    <div className="">
      {user ? (
        <div>
          <div className="flex">
            <div className="md:w-[100px] bg-gray-500 md:h-[100px] border rounded-full"></div>
            <div className="items-center text-3xl"> {user.name}</div>
          </div>

          <div onClick={handleLogOut}>
            <button>Log out</button>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
