import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const DottedButton = ({ name, type, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={`capitalize flex items-center justify-center rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_red] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? <span className="loader"></span> : name}
    </button>
  );
};

export const ButtonWrapper = () => {
  return (
    <div className="flex items-center justify-center">
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/logout")}
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      <BiLogOut />
      <span>Logout</span>
    </button>
  );
};
