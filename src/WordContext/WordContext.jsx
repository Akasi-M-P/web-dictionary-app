// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { createContext, useState } from "react";

// export const WordContext = createContext();

// export const WordProvider = ({ children }) => {
//   const [wordDefinition, setWordDefinition] = useState(null);
//   const [searchWord, setSearchWord] = useState(false);
//   const [word, setWord] = useState("");

//   const wordResult = (data) => {
//     setWordDefinition(data);
//     setSearchWord(true);
//   };

//   const handleSearchWord = async () => {
//     try {
//       const response = await fetch(
//         `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//       );
//       if (response.ok) {
//         const definedWord = await response.json();
//         wordResult(definedWord);
//         console.log(definedWord);
//       } else {
//         console.error("Failed to get word definition");
//       }
//     } catch (error) {
//       console.error("Failed to get word definition", error);
//     } finally {
//       setWord("");
//     }
//   };

//   return (
//     <WordContext.Provider
//       value={{
//         definedWord,
//         setWord,
//         setWordDefinition,
//         wordResult,
//         wordDefinition,
//         setSearchWord,
//         handleSearchWord,
//       }}
//     >
//       {children}
//     </WordContext.Provider>
//   );
// };

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import axios from "axios";
export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [searchWord, setSearchWord] = useState(false);
  const [word, setWord] = useState("");

  // const wordResult = (data) => {
  //   setWordDefinition(data);
  //   setSearchWord(true);
  // };

  const handleSearchWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(response, "res");
      setWordDefinition(response.data[0]);
    } catch (error) {
      console.error("Failed to get word definition", error);
    }
  };

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        wordDefinition,
        setSearchWord,
        handleSearchWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
