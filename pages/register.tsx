import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const [userData, setUserData] = useState<any>({ name: "", email: "", password: "", confirmPassword: "" });
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Password confirmation did not match with password!");
    } else {
      const body = { email: userData.email, name: userData.name, password: userData.password };
      axios
        .post("http://localhost:8000/users/register", body)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            alert("Registration successful!");
            router.push("/login");
          }
        })
        .catch(({ response, code }) => {
          const { data } = response;
          if (data.code === 11000) {
            alert(`Duplicate error! Try another ${Object.keys(data.keyValue)}.`);
          } else {
            alert("Unknown error");
          }
        });
    }
  }
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e: any) => setUserData({ ...userData, email: e.target.value })}
                  value={userData.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e: any) => setUserData({ ...userData, name: e.target.value })}
                  value={userData.name}
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  placeholder="Enter your username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e: any) => setUserData({ ...userData, password: e.target.value })}
                  id="password"
                  name="password"
                  type="password"
                  value={userData.password}
                  placeholder="Enter a password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e: any) => setUserData({ ...userData, confirmPassword: e.target.value })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="Password"
                  value={userData.confirmPassword}
                  placeholder="Confirm your password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                // onSubmit={(e: any) => handleSubmit(e)}
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link href="/login" className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
