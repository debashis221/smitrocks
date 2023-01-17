"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdminSidebar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (typeof window === "undefined") return null;
  if (status === "loading") {
    return <p className="text-center">Loading...</p>;
  }

  if (status === "unauthenticated" || !session!.user!.isAdmin!) {
    router.push("/");
  } else {
    return (
      <div className="overflow-y-hidden">
        <div className="navbar bg-primary text-primary-content">
          <div className="navbar-start">
            <Link className="btn btn-ghost normal-case text-xl" href="/">
              SMIT ROCKS
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            {session && (
              <div className="avatar cursor-pointer">
                <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                  {session.user!.image ? (
                    <Image
                      src={session.user!.image!}
                      alt="avatar"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Image
                      src={
                        "https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg"
                      }
                      alt="avatar"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <ul className="menu bg-secondary w-56 p-2 h-screen">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Item 2
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Item 1
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Item 3
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

export default AdminSidebar;
