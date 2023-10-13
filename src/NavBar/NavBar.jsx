import bookImg from "../assets/dicpic.png"
import FontDropDown from "../FontDropDown/FontDropDown"
import { BsMoon, BsCircleFill } from "react-icons/bs";


const NavBar = () => {
  return (
    <main className="flex justify-between items-center px-10 py-10 ">
      <section>
        <div className="flex item-center">
          <img src={bookImg} alt="book-img" />
        </div>
      </section>
      <section className="flex items-center gap-5">
        <div>
          <FontDropDown />
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-6 rounded-xl bg-gray-600 flex items-center">
            <BsCircleFill className="text-white w-10 h-5 relative right-2" />
          </div>
          <div>
            <BsMoon className="w-6 h-6"/>
          </div>
        </div>
      </section>
    </main>
  );
}
export default NavBar