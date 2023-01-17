"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { createUser } from "../../../axios/services/users.service";
import toast from "react-hot-toast";
import { FaFacebook, FaLock, FaGoogle, FaUser } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiMail } from "react-icons/fi";
import login_validate, {
  register_validate,
} from "../../../lib/validation/validations";
import { useRouter } from "next/navigation";
import { GeneralLayot } from "wrappers";

const LoginPage = () => {
  const [loginActive, setLoginActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const LoginSubmit = async (values: Object) => {
    const { email, password } = values;
    setIsLoading(true);
    const status = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: "/",
    });
    if (status!.ok) {
      setIsLoading(false);
      router.push(status!.url!);
    } else {
      setIsLoading(false);
      toast.error(status!.error!);
    }
  };
  const onRegisterSubmit = async (values: Object) => {
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
      setIsLoading(false);
      toast.error(error.data.msg);
    }
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GeneralLayot>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <div className="tabs tabs-boxed mb-2 justify-center items-center p-3">
            <span
              className={loginActive ? "tab tab-active" : "tab"}
              onClick={() => {
                setLoginActive(!loginActive);
                setRegisterActive(!registerActive);
              }}
            >
              Login
            </span>
            <span
              className={registerActive ? "tab tab-active" : "tab"}
              onClick={() => {
                setLoginActive(!loginActive);
                setRegisterActive(!registerActive);
              }}
            >
              Register
            </span>
          </div>
          <div className="flex flex-col w-30 border-opacity-50">
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
                  <Form className="px-5 py-5">
                    <div className="form-control py-3 px-5">
                      <div className="indicator">
                        <span className="indicator-item badge bg-primary">
                          Required
                        </span>
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
                    </div>
                    <div className="form-control px-5">
                      <div className="indicator">
                        <span className="indicator-item badge bg-primary">
                          Required
                        </span>
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
                  <Form className="place-items-center px-5 py-5">
                    <div className="form-control px-5">
                      <div className="indicator">
                        <span className="indicator-item badge bg-primary">
                          Required
                        </span>
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
                    </div>
                    <div className="form-control py-3 px-5">
                      <div className="indicator">
                        <span className="indicator-item badge bg-primary">
                          Required
                        </span>
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
                    </div>
                    <div className="form-control px-5">
                      <div className="indicator">
                        <span className="indicator-item badge bg-primary">
                          Required
                        </span>
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
                    </div>
                    <div className="form-control py-3 px-5">
                      <div className="indicator">
                        <span className="indicator-item badge bg-primary">
                          Required
                        </span>
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
          </div>
        </div>
      </div>
    </GeneralLayot>
  );
};

export default LoginPage;
