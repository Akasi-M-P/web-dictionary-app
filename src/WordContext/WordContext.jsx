/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import axios from "axios";

const WordContext = createContext();
const WordProvider = ({ children }) => {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [searchWord, setSearchWord] = useState(false);
  const [word, setWord] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSearchWord = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(response.data, "res");
      setWordDefinition(response.data[0]);
    } catch (error) {
      setErrorMessage(true);
      console.error("Failed to get word definition", error);
    }

    if (word.trim() === "") {
      setEmptyInput(true);
    }
  };

  function playAudio() {
    const { phonetics } = wordDefinition;
    try {
      let audio = new Audio(wordDefinition.meanings[1].phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        wordDefinition,
        setSearchWord,
        handleSearchWord,
        playAudio,
        emptyInput,
        setEmptyInput,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider };