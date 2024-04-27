import logo from "../assets/logo.svg";
import { ButtonWrapper } from "./Button";

const Header = () => {
  return (
    <header className="text-white h-14">
      <nav className="flex justify-between p-2">
        <div className="flex justify-center items-center">
          <img className="w-11" src={logo} alt="logo" />
          <div className="loved-by text-3xl">RizzRecommendation_</div>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <h3>My favorites</h3>
        </div>
        <div className="flex justify-center items-center">
          <ButtonWrapper />
        </div>
      </nav>
    </header>
  );
};

export default Header;
