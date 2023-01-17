"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsFilterLeft, BsSearch } from "react-icons/bs";
import AdminNavBar from "./AdminNavBar";

const AdminSidebar = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  if (typeof window === "undefined") return null;
  if (status === "loading") {
    return <p className="text-center">Loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  } else {
    return (
      <div className="overflow-y-hidden">
        <AdminNavBar session={session} />
        <div>
          <span
            className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <BsFilterLeft className="px-2 bg-secondary rounded-md" />
          </span>
          <div
            className={`sidebar fixed top-0 bottom-0 lg:left-0 ${
              open ? "" : "left-[-300px]"
            }  duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-secondary shadow h-screen`}
          >
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center rounded-md ">
                <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md" />
                <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
                  SMIT ROCKS
                </h1>
                <RxCross1
                  className="ml-28 cursor-pointer lg:hidden"
                  onClick={() => setOpen(!open)}
                />
              </div>
              <hr className="my-2 text-gray-600" />
              <div>
                <div
                  className="p-2.5 mt-3 flex items-center rounded-md 
  px-4 duration-300 cursor-pointer  bg-gray-700"
                >
                  <BsSearch className="text-sm" />
                  <input
                    className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                    placeholder="Serach"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default AdminSidebar;
