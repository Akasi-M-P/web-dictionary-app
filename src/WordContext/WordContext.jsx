/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import axios from "axios";
export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [searchWord, setSearchWord] = useState(false);


  const [word, setWord] = useState("");

  const handleSearchWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(response.data, "res");
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
