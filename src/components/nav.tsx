import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/images/logo.png";
import usuarioLogo from "../assets/images/usuarioLogo.png";
import shopLogo from "../assets/images/shopLogo.png";

const navSubtitles = {
  products: "PRODUCTS",
  brands: "BRANDS",
  signIn: "SING IN",
  cart: "CART",
};

export default function Nav() {
  return (
    <nav className="bg-white border-b shadow-lg shadow-gray-200/50 px-2 sm:px-4 font-Lato font-medium">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center mx-auto">
        <a href="https://lexir.com/" className="">
          <Image src={logo} width="103px" height="24px" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-100"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:flex-row text-xs">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3">
                {navSubtitles.products}
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3">
                {navSubtitles.brands}
              </a>
            </li>
            <li className="flex">
              <a href="#" className="block py-2 pl-3">
                <Image src={usuarioLogo} width="20px" height="20px" />
              </a>
              <a href="#" className="block py-2 pr-4 pl-3">
                {navSubtitles.signIn}
              </a>
            </li>
            <li className="flex">
              <a href="#" className="block py-2 pl-3">
                <Image src={shopLogo} width="20px" height="20px" />
              </a>
              <a href="#" className="block py-2 pr-4 pl-3">
                {navSubtitles.cart}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
