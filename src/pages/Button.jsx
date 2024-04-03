export const DottedButton = ({ name, type, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={`capitalize rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_red] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? `${name}...` : name}
    </button>
  );
};
