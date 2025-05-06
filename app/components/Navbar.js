import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="navbar bg-[#F5F7FA] shadow-sm px-4 md:px-8 lg:px-12">
      <div className="navbar-start w-auto md:w-7xl mx-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Testimonial</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <Link
          className="flex items-center gap-2 text-sm sm:text-base"
          href={"/"}
        >
          <div className="w-10 h-10 sm:w-16 sm:h-16">
            <Image
              className="w-full h-full object-contain"
              src={logo}
              alt="logo"
            />
          </div>
          <span className="font-medium">Marcel Grace</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Feature</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Testimonial</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="text-[#4CAF4F] mr-2 sm:mr-4 font-medium text-sm sm:text-base">
          Login
        </a>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}
