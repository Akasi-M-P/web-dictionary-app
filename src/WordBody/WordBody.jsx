import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
const WordBody = () => {
  return (
    <main className="w-11/12 mx-auto px-4 py-8">
      <section className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-left text-gray-900">keyboard</p>
          <p className="text-purple-600">/ˈkiːbɔːd/</p>
        </div>
        <div className="w-24">
          <BsFillPlayCircleFill className="w-16 h-16 mx-auto bg-purple-400 text-purple-200 rounded-full hover:text-purple-600 hover:bg-white" />
        </div>
      </section>
      <section className="flex items-center gap-5 py-5">
        <div className="px-1">
          <p className="italic font-semibold">noun</p>
        </div>
        <div className="w-11/12">
          <hr className="w-full" />
        </div>
      </section>
      <section className="w-11/12">
        <div className="">
          <p className="text-gray-400">Meaning</p>
        </div>
        <div className="w-11/12 mx-auto px-2 py-4">
          <ul className="list-disc text-sm leading-6">
            <li className="mb-4">
              <p>
                (etc.) A set of keys used to operate a typewriter, computer etc.
              </p>
            </li>
            <li className="mb-4">
              <p>
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </p>
            </li>
            <li className="mb-4">
              <p>
                A device with keys of a musical keyboard, used to control
                electronic sound-producing devices which may be built into or
                separate from the keyboard device.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex gap-5">
        <div>
          <p className="text-gray-400 text-sm">Synonyms</p>
        </div>
        <div>
          <ul>
            <li>
              <p className="text-purple-600 text-sm font-bold">
                electronic keyboard
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex items-center gap-5 py-5">
        <div className="px-1">
          <p className="italic font-semibold">verb</p>
        </div>
        <div className="w-11/12">
          <hr className="w-full" />
        </div>
      </section>
      <section className="w-11/12">
        <div className="">
          <p className="text-gray-400">Meaning</p>
        </div>
        <div className="w-11/12 mx-auto px-2 py-4">
          <ul className="list-disc text-sm">
            <li className="mb-4">
              <p>To type on a computer keyboard.</p>
              <p className="text-gray-400 text-sm">
                “Keyboarding is the part of this job I hate the most.”
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex gap-5">
        <div>
          <p className="text-gray-400 text-xs">Source</p>
        </div>
        <div>
          <ul>
            <li className="flex items-center gap-2">
              <a className="text-xs underline text-gray-900">
                https://en.wiktionary.org/wiki/keyboard
              </a>
              <FiExternalLink className="text-xs" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default WordBody;
