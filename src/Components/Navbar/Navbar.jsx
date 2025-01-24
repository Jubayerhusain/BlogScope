import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <div className=" top-0 sticky bg-transparent backdrop-blur-xl z-50 shadow-lg">
      <div className="navbar px-14 py-6 bg-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="buthrefn"
              className="btn btn-ghost lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Profile</Link>
              </li>
            </ul>
          </div>
          <a className="text-4xl font-bold text-orange-500">BlogScope</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg font-semibold hover:text-blue-400">
              <Link href={`/`}>Home</Link>
            </li>
            {
              user?(
                <li className="text-lg font-semibold hover:text-blue-400">
              <Link href={"/profile"}>Profile</Link>
            </li>
              ):''
            }
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {!user ? (
            <Link
              href={"/api/auth/login"}
              className="btn btn-link text-lg text-orange-500"
            >
              {" "}
              Sing In
            </Link>
          ) : (
            <Link
              href={"/api/auth/logout"}
              className="rounded-xl text-lg font-semibold text-white border-2 bg-orange-500 px-4 py-2"
            >
              Sing Out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
