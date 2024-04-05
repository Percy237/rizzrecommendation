import { Link } from "react-router-dom";
import { DottedButton } from "../components/Button";

const WelcomePage = () => {
  return (
    <div className=" bg-black  loved-by">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-[90%] md:w-[70%] lg:w-[70%]">
          <h1 className="text-3xl xl:text-5xl lg:text-5 md:text-5xl pt-4 text-white">
            Welcome to the only pickupLine recommendation system you will ever
            need !
          </h1>
        </div>
        <iframe
          src="https://giphy.com/embed/ZCNjymWszyazkph0z2"
          width="320"
          height="280"
          frameBorder="0"
          className="pt-4"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/Friends-season-6-friends-tv-episode-607-ZCNjymWszyazkph0z2">
            via GIPHY
          </a>
        </p>
        <div className="flex pt-4 gap-x-5">
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
