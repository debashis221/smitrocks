"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signOut, useSession, signIn } from "next-auth/react";
import { FaFacebook, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import { fetchSingleUser, User } from "../axios/services/users.service";

export default function NavBar() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<User>();

  async function getUserData() {
    if (session) {
      const user = await fetchSingleUser(session!.user!.email!);
      setUserData(user);
    }
  }
  useEffect(() => {
    getUserData();
  }, [session]);

  return (
    <div className="sticky top-0 z-30">
      <div className="navbar bg-base-300 lg:px-14">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <FaFacebook />
          </a>
          <a className="btn btn-ghost normal-case text-xl">
            <FaLinkedinIn />
          </a>
          <a className="btn btn-ghost normal-case text-xl">
            <FaInstagram />
          </a>
          <div className="hidden lg:flex">
            <a className="lg:px-5 link link-hover normal-case text-base">
              Career
            </a>
            <a className="lg:px-5 link link-hover normal-case text-base">
              Pay Online
            </a>
            <a className="lg:px-5 link link-hover normal-case text-base">
              Explore
            </a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex gap-2">
          <a className="lg:px-5 btn btn-ghost normal-case text-base">
            <FaPhone />
          </a>
          <a>(+91) 6295247210</a>
          <a className="lg:px-5 btn btn-ghost normal-case text-base">
            <FiMail />
          </a>
          <a>debashissaha221@gmail.com</a>
        </div>
        <div className="navbar-end lg:hidden">
          <button className="btn btn-primary gap-2 lg:hidden justify-end">
            <FaPhone />
            Call Now
          </button>
        </div>
      </div>
      <div className="navbar bg-base-200 lg:px-14 py-2">
        <div className="navbar-start px-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>EXPLORE</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  ACADEMICS
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>CAMPUSES</a>
              </li>
              <li>
                <a>FACILITIES</a>
              </li>
              <li>
                <a>RESEARCH</a>
              </li>
              <li>
                <a>PLACEMENT</a>
              </li>
              <li>
                <a>CONTACT US</a>
              </li>
            </ul>
          </div>
          <Link href="/">
            <Image
              src="https://smitgp.edu.in/uploads/cms/setting/1625928713-smit_logo.png"
              alt="logo"
              width="100"
              height="100"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal px-1">
            <li>
              <a>EXPLORE</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                ACADEMICS
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>CAMPUSES</a>
            </li>
            <li>
              <a>FACILITIES</a>
            </li>
            <li>
              <a>RESEARCH</a>
            </li>
            <li>
              <a>PLACEMENT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {session ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
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
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {userData!.data.user.isAdmin ? (
                  <li>
                    <a>Admin Panel</a>
                  </li>
                ) : (
                  <></>
                )}
                {userData!.data.user.isTeacher ? (
                  <li>
                    <a>Faculty Panel</a>
                  </li>
                ) : (
                  <></>
                )}
                <li>
                  <a>Profile</a>
                </li>
                <li onClick={() => signOut()}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r from-green-400 to-purple-500 rounded-2xl cursor-pointer sm:w-auto"
              onClick={() => signIn()}
            >
              Login Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
