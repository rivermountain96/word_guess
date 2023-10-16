import Letter from "./Letter";

const LetterGrid = ({ secretWord, guessedLetters }) => {
  let lettered = secretWord.split("").map((letter, idx) => {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    return <Letter key={idx} value={letter} isShown={isShown} />;
  });
  return <div className="letters">{lettered}</div>;
};
export default LetterGrid;
