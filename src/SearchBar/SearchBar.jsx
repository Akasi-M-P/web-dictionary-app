import {CiSearch} from "react-icons/ci"

const SearchBar = () => {

    const handleSubmit = () => {

    }

    const handleChange = () => {}
  return (
    <main className="w-full px-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-11/12 mx-auto border-2 rounded-2xl px-4 py-4 bg-gray-200"
      >
        <input
          type="text"
          name=""
          value=""
          onChange={handleChange}
          className="w-11/12 h-8 mx-auto focus:outline-none bg-gray-200"
        />
        <CiSearch className="relative w-8 h-8 text-purple-600 opacity-100" />
      </form>
    </main>
  );
}
export default SearchBar