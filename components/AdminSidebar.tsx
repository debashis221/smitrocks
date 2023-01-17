"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsFilterLeft, BsHouse } from "react-icons/bs";
import AdminNavBar from "./AdminNavBar";
import Link from "next/link";
import { fetchSingleUser, User } from "../axios/services/users.service";

const AdminSidebar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<User>();
  const router = useRouter();
  type menuProps = {
    name: string;
    href: string;
    icon: JSX.Element;
  };
  let menu: menuProps[] = [];
  async function getUserData() {
    if (session) {
      const user = await fetchSingleUser(session!.user!.email!);
      setUserData(user);
    }
  }
  useEffect(() => {
    getUserData();
  }, [session]);

  if (userData?.data.user.isAdmin) {
    menu = [
      {
        name: "Home",
        href: "/admin",
        icon: <BsHouse />,
      },
    ];
  }

  return (
    <div className="overflow-y-hidden">
      <AdminNavBar session={session} />
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <BsFilterLeft className="px-2 bg-[#13005A] rounded-md" size={25} />
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 ${
          open ? "" : "left-[-300px]"
        }  duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-[#13005A] shadow h-screen`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              SMIT ROCKS
            </h1>
            <RxCross1
              className="ml-28 cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
          <hr className="my-2 text-gray-600" />
          <div className="flex flex-col items-center justify-center">
            <ul className="menu bg-base-100 w-60 p-2 rounded-box my-5">
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href="/admin">
                      <BsHouse size={25} />
                      Home
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
