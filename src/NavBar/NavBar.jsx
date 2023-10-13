import { useContext } from "react";
import bookImg from "../assets/dicpic.png";
import FontDropDown from "../FontDropDown/FontDropDown";
import { BsMoon, BsCircleFill } from "react-icons/bs";
import { ThemeContext } from "../Theme/ThemeContext";

const NavBar = () => {
  const { darkMode, enableDarkMode } = useContext(ThemeContext);
  return (
    <main className="flex justify-between items-center px-10 py-10 lg:px-12 xl:px-14 2xl:px-24 ">
      <section>
        <div className="flex item-center">
          <img
            src={bookImg}
            alt="book-img"
            className="2xl:w-12 2xl:h-12 object-contain"
          />
        </div>
      </section>
      <section className="flex items-center gap-5">
        <div>
          <FontDropDown />
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-6 rounded-xl bg-gray-600 flex items-center">
            <BsCircleFill
              onClick={enableDarkMode}
              className="text-white w-10 h-5 relative right-2 cursor-pointer"
            />
          </div>
          <div>
            <BsMoon className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default NavBar;
