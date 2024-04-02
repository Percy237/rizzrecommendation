import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="text-white h-14">
      <nav className="flex">
        <div className="flex justify-center items-center">
          <img className="w-11" src={logo} alt="logo" />
          <div className="loved-by text-3xl">RizzRecommendation_</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
