import { Link } from "react-router-dom";
import { DottedButton } from "./Button";

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen loved-by">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl xl:text-5xl text-white">
          Welcome to the only pickupLine recommendation system you will ever
          need !
        </h1>
        <iframe
          src="https://giphy.com/embed/ZCNjymWszyazkph0z2"
          width="400"
          height="320"
          frameBorder="0"
          className="giphy-embed sm:w-96 sm:h-80 md:w-400 md:h-320 lg:w-600 lg:h-480 xl:w-800 xl:h-640"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/Friends-season-6-friends-tv-episode-607-ZCNjymWszyazkph0z2">
            via GIPHY
          </a>
        </p>
        <div className="flex gap-x-5">
          <Link to="register">
            <DottedButton name="register" />
          </Link>
          <Link to="login">
            <DottedButton name="login" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
