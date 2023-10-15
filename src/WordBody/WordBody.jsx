/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { ThemeContext } from "../Theme/ThemeContext";
import { FontContext } from "../FontContext/FontContext";
const WordBody = () => {
  const { darkMode } = useContext(ThemeContext);
  const { selectedFont } = useContext(FontContext);
  const [noWordFound, setNoWordFound] = useState(true);
  return (
    <main
      style={{ fontFamily: selectedFont }}
      className="w-11/12 mx-auto px-4 py-8"
    >
      {noWordFound ? (
        <section className="text-center text-xs h-full">
          🫤
          <p
            className={
              darkMode ? "text-white font-bold" : "text-black font-bold"
            }
          >
            No Definitions Found
          </p>
          <p className={darkMode ? "text-white" : "text-black"}>
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </section>
      ) : (
        <>
          <section className="flex justify-between items-center">
            <div>
              <p
                className={`text-3xl  2xl:text-4xl font-bold text-left ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                keyboard
              </p>
              <p className="text-purple-600 2xl:text-lg">/ˈkiːbɔːd/</p>
            </div>
            <div className="w-24">
              <BsFillPlayCircleFill
                className={`w-16 h-16 mx-auto ${
                  darkMode
                    ? "bg-purple-200 text-purple-900 opacity-50"
                    : "bg-purple-600 text-purple-200"
                }  rounded-full cursor-pointer hover:text-purple-600 hover:bg-white`}
              />
            </div>
          </section>
          <section className="flex items-center gap-5 py-5">
            <div className="px-1">
              <p
                className={`italic font-semibold ${
                  darkMode ? "text-white" : ""
                }`}
              >
                noun
              </p>
            </div>
            <div className="w-11/12">
              <hr className="w-full" />
            </div>
          </section>
          <section className="w-11/12">
            <div className="">
              <p className="text-gray-400 xl:text-lg">Meaning</p>
            </div>
            <div className="w-11/12 mx-auto px-2 py-4">
              <ul
                className={`list-disc text-sm lg:text-md xl:text-lg ${
                  darkMode ? "text-white dotStyle" : ""
                } leading-6`}
              >
                <li className="mb-4">
                  <p className="">
                    (etc.) A set of keys used to operate a typewriter, computer
                    etc.
                  </p>
                </li>
                <li className="mb-4">
                  <p>
                    A component of many instruments including the piano, organ,
                    and harpsichord consisting of usually black and white keys
                    that cause different tones to be produced when struck.
                  </p>
                </li>
                <li className="mb-4">
                  <p>
                    A device with keys of a musical keyboard, used to control
                    electronic sound-producing devices which may be built into
                    or separate from the keyboard device.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex gap-5">
            <div>
              <p className="text-gray-400 text-sm xl:text-lg">Synonyms</p>
            </div>
            <div>
              <ul>
                <li>
                  <p className="text-purple-600 text-sm xl:text-lg font-bold">
                    electronic keyboard
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex items-center gap-5 py-5">
            <div className="px-1">
              <p
                className={`italic font-semibold ${
                  darkMode ? "text-white" : ""
                }`}
              >
                verb
              </p>
            </div>
            <div className="w-11/12">
              <hr className="w-full" />
            </div>
          </section>
          <section className="w-11/12">
            <div className="">
              <p className="text-gray-400 xl:text-lg">Meaning</p>
            </div>
            <div className="w-11/12 mx-auto px-2 py-4">
              <ul
                className={`list-disc text-sm lg:text-md xl:text-lg ${
                  darkMode ? "text-white dotStyle" : ""
                } `}
              >
                <li className="mb-4">
                  <p>To type on a computer keyboard.</p>
                  <p className="text-gray-400 text-sm lg:text-md 2xl:text-lg ">
                    “Keyboarding is the part of this job I hate the most.”
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex gap-5">
            <div>
              <p className="text-gray-400 text-xs lg:text-sm xl:text-lg">
                Source
              </p>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-2">
                  <a
                    className={`text-xs xl:text-lg underline  ${
                      darkMode ? "text-white" : "text-gray-900"
                    } cursor-pointer`}
                  >
                    https://en.wiktionary.org/wiki/keyboard
                  </a>
                  <FiExternalLink className="text-xs 2xl:text-lg cursor-pointer" />
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
    </main>
  );
};
export default WordBody;
