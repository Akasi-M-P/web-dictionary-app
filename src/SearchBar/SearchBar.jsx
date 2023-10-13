/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../Theme/ThemeContext";

const SearchBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const handleSubmit = () => {};

  const handleChange = () => {};
  return (
    <main className="w-full px-4 md:px-2 lg:px-0 2xl:px-4">
      <form
        onSubmit={handleSubmit}
        className={`flex w-11/12 mx-auto rounded-2xl px-4 py-4 ${
          darkMode ? "bg-gray-800 border-none" : "bg-gray-200"
        }   md:px-2`}
      >
        <input
          type="text"
          name=""
          value=""
          placeholder="Search for any word..."
          onChange={handleChange}
          className={`w-11/12 h-8 mx-auto focus:outline-none  ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        />
        <CiSearch className="relative w-8 h-8 lg:w-10 lg:h-10 text-purple-600 opacity-100" />
      </form>
      {/* <p className="w-11/12 mx-auto text-red-400">Whoops, can't be empty...</p> */}
    </main>
  );
};
export default SearchBar;
