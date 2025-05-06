export default function Button({ children, className }) {
  return (
    <button
      className={`btn bg-[#4CAF4F] border-0 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-sm text-white text-sm sm:text-base hover:bg-[#45a049] hover:shadow-lg transition duration-300 ease-in-out ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}
