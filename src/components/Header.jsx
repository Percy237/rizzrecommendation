import logo from "../assets/logo.svg";
import { ButtonWrapper } from "./Button";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constant";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    setIsLoggedIn(!!accessToken);
  }, []);

  return (
    <header className="text-white h-14 px-4 py-2 flex justify-between items-center sm:justify-evenly md:flex-row flex-col">
      <div className="flex items-center w-full md:w-auto">
        <img className="h-14" src={logo} alt="logo" />
        <h1 className="loved-by text-xl md:text-3xl lg:text-3xl font-bold ">
          RizzRecommendation_
        </h1>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen || isLoggedIn ? (
        <div
          className={`mt-4 md:mt-0 ${
            isMenuOpen
              ? "flex card-shadow bg-white  text-black z-10 w-full"
              : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 items-center`}
        >
          <h3 className="cursor-pointer">My Favorites💝</h3>
          <ButtonWrapper />

          {/* Assuming ButtonWrapper has some functionality */}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
