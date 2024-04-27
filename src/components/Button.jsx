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
      {isLoading ? <span className="heart-loader"></span> : name}
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

// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// export const ButtonWrapper1 = () => {
//   return (
//     <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
//       <SpotlightButton />
//     </div>
//   );
// };

// const SpotlightButton = () => {
//   const btnRef = useRef(null);
//   const spanRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { width } = e.target.getBoundingClientRect();
//       const offset = e.offsetX;
//       const left = `${(offset / width) * 100}%`;

//       spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
//     };

//     const handleMouseLeave = () => {
//       spanRef.current.animate(
//         { left: "50%" },
//         { duration: 100, fill: "forwards" }
//       );
//     };

//     btnRef.current.addEventListener("mousemove", handleMouseMove);
//     btnRef.current.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       btnRef.current.removeEventListener("mousemove", handleMouseMove);
//       btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <motion.button
//       whileTap={{ scale: 0.985 }}
//       ref={btnRef}
//       className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
//     >
//       <span className="pointer-events-none relative z-10 mix-blend-difference">
//         Hover me
//       </span>
//       <span
//         ref={spanRef}
//         className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
//       />
//     </motion.button>
//   );
// };
