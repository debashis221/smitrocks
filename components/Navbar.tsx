"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { createUser, UserClass } from "../axios/services/users.service";
import toast from "react-hot-toast";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaLock,
  FaGoogle,
  FaUser,
} from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiMail } from "react-icons/fi";
import login_validate, {
  register_validate,
} from "../lib/validation/validations";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const [loginActive, setLoginActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const LoginSubmit = async (values: UserClass) => {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status!.ok) {
      router.push(status!.url!);
    }
  };
  const onRegisterSubmit = async (values: UserClass) => {
    setIsLoading(true);
    try {
      const data = await createUser(values);
      if (data.status === 200) {
        setIsLoading(false);
        toast.success(data.data.msg);
      } else {
        toast.error(data.data.msg);
      }
    } catch (error: any) {
      toast.error(error.data.msg);
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-30">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="tabs tabs-boxed mb-2 justify-center items-center p-3">
            <Link
              className={loginActive ? "tab tab-active" : "tab"}
              onClick={() => {
                setLoginActive(!loginActive);
                setRegisterActive(!registerActive);
              }}
              href="#"
            >
              Login
            </Link>
            <Link
              className={registerActive ? "tab tab-active" : "tab"}
              href="#"
              onClick={() => {
                setLoginActive(!loginActive);
                setRegisterActive(!registerActive);
              }}
            >
              Register
            </Link>
          </div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card bg-base-200 rounded-box place-items-center lg:py-3 lg:px-5">
              {loginActive ? (
                <Formik
                  className="place-items-center"
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validate={login_validate}
                  onSubmit={LoginSubmit}
                >
                  <Form>
                    <div className="form-control py-3 px-5">
                      <label className="input-group">
                        <span>
                          <FiMail />
                        </span>
                        <Field
                          type="email"
                          placeholder="info@site.com"
                          className="input input-bordered w-full max-w-xs"
                          name="email"
                          required
                        />
                      </label>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <span className="text-center text-rose-500">
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-control px-5">
                      <label className="input-group">
                        <span>
                          <FaLock />
                        </span>
                        <Field
                          type="password"
                          placeholder="*********"
                          className="input input-bordered w-full max-w-xs"
                          name="password"
                          required
                        />
                      </label>
                      <ErrorMessage name="password">
                        {(msg) => (
                          <span className="text-center text-rose-500">
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-control py-3 px-5">
                      {isLoading ? (
                        <button className="btn btn-success loading">
                          Loading
                        </button>
                      ) : (
                        <button className="btn btn-success" type="submit">
                          Login
                        </button>
                      )}
                    </div>
                  </Form>
                </Formik>
              ) : (
                <Formik
                  initialValues={{
                    userName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  validate={register_validate}
                  onSubmit={onRegisterSubmit}
                >
                  <Form className="place-items-center">
                    <div className="form-control px-5">
                      <label className="input-group">
                        <span>
                          <FaUser />
                        </span>
                        <Field
                          type="text"
                          placeholder="Debashis Saha"
                          className="input input-bordered w-full max-w-xs"
                          name="name"
                          required
                        />
                      </label>
                      <ErrorMessage name="name">
                        {(msg) => (
                          <span className="text-center text-rose-500">
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-control py-3 px-5">
                      <label className="input-group">
                        <span>
                          <FiMail />
                        </span>
                        <Field
                          type="email"
                          placeholder="info@site.com"
                          className="input input-bordered w-full max-w-xs"
                          name="email"
                          required
                        />
                      </label>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <span className="text-center text-rose-500">
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-control px-5">
                      <label className="input-group">
                        <span>
                          <FaLock />
                        </span>
                        <Field
                          type="password"
                          placeholder="Password"
                          className="input input-bordered w-full max-w-xs"
                          name="password"
                          required
                        />
                      </label>
                      <ErrorMessage name="password">
                        {(msg) => (
                          <span className="text-center text-rose-500">
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-control py-3 px-5">
                      <label className="input-group">
                        <span>
                          <FaLock />
                        </span>
                        <Field
                          type="password"
                          placeholder="Confirm Password"
                          className="input input-bordered w-full max-w-xs"
                          name="confirmPassword"
                          required
                        />
                      </label>
                      <ErrorMessage name="confirmPassword">
                        {(msg) => (
                          <span className="text-center text-rose-500">
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-control py-3 px-5">
                      {isLoading ? (
                        <button className="btn btn-success loading" disabled>
                          Loading
                        </button>
                      ) : (
                        <button className="btn btn-success" type="submit">
                          Register
                        </button>
                      )}
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
            <div className="divider">OR</div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <div className="flex items-center gap-3">
                <button
                  className="btn btn-primary"
                  onClick={() => handleGoogleSignIn()}
                >
                  <FaGoogle size={20} color="white" />
                </button>
                <button className="btn btn-secondary">
                  <FaFacebook size={20} color="white" />
                </button>
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn btn-error">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
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
          <a>
            <Image
              src="https://smitgp.edu.in/uploads/cms/setting/1625928713-smit_logo.png"
              alt="logo"
              width="100"
              height="100"
            />
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
          {session ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <div className="avatar cursor-pointer">
                  <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    {session ? (
                      <Image
                        src={session.user!.image!}
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li onClick={() => signOut()}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <label
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r from-green-400 to-purple-500 rounded-2xl cursor-pointer sm:w-auto"
              htmlFor="my-modal-6"
            >
              Login Now
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
