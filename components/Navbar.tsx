import Image from "next/image";
import { FaFacebook, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function NavBar() {
  return (
    <div>
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
          <button className="btn gap-2 lg:hidden justify-end">
            <FaPhone />
            Call Now
          </button>
        </div>
      </div>
      <div className="navbar bg-base-200 lg:px-14 py-5">
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
          <a>
            <Image src="/logo.png" alt="logo" width={100} height="100" />
          </a>
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
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
