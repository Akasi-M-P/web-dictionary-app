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
    </main>
  );
};
export default WordBody;
