import { BsFillPlayCircleFill } from "react-icons/bs";

const WordBody = () => {
  return (
    <main className="w-11/12 mx-auto px-4 py-8">
      <section className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-left text-gray-900">keyboard</p>
          <p className="text-purple-600">/ˈkiːbɔːd/</p>
        </div>
        <div className="w-24">
          <BsFillPlayCircleFill className="w-20 h-20 mx-auto bg-purple-400 text-purple-200 rounded-full hover:text-purple-600 hover:bg-white" />
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
          <p className="text-gray-600">Meaning</p>
        </div>
        <div className="w-10/12 mx-auto">
          <ul className="list-disc text-sm">
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default WordBody;
