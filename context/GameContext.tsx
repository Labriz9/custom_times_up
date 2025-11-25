import data from '@/app/data.json';
import React, { createContext, useContext, useState } from 'react';

// Define the shape of the data
type RoundItem = {
  id: string;
  title: string;
};
type WordItem = {
  id: string;
  word: string;
};
type PlayerItem = {
  id: string;
  name: string;
};

type GameContextType = {
  // Round
  round: RoundItem;
  nextRound: () => void;
  resetRound: () => void;
  // Word
  words: WordItem[];
  addWord: (word: string) => void;
  removeWord: (id: string) => void;
  // Player
  current_player: PlayerItem;
  players: PlayerItem[];
  addPlayer: (name: string) => void;
  resetPlayers: () => void;
  nextPlayer: () => void;
};


// Create the context with a default value
const GameContext = createContext<GameContextType | undefined>(undefined);


// Create a Provider component
export function GameProvider({ children }: { children: React.ReactNode }) {
  // Initial state from json
  // Round
  const [round, setRound] = useState<RoundItem>(data["round"][0]);

  const nextRound = () => {
    let new_id = Number(round.id) + 1;
    setRound({id : new_id.toString(), title : data["round"][new_id].title});
  };

  const resetRound = () => {
    setRound(data["round"][0]);
  };

  // Word
  const [words, setWords] = useState<WordItem[]>(data["words"]);

  const addWord = (word: string) => {
    const newWord = { id: Date.now().toString(), word: word };
    setWords([...words, newWord]);
  };

  const removeWord = (id: string) => {
    setWords(words.filter(item => item.id !== id));
  };

  // Player
  const [current_player_id, setCurrentPlayerId] = useState("0") ;
  const [players, setPlayers] = useState<PlayerItem[]>([]);
  const current_player = players.find(p => p.id === current_player_id) ?? { id: "0", name: "Dummy" };

  const addPlayer = (name: string) => {
    const newPlayer = { id: Date.now().toString(), name: name };
    setPlayers([...players, newPlayer]);
  };

  const resetPlayers = () => {
    setPlayers([]);
  };

  const nextPlayer = () => {
    const currentIndex = players.findIndex(p => p.id === current_player_id);
    const nextIndex = (currentIndex + 1) % players.length;
    setCurrentPlayerId(players[nextIndex].id);
  };


  return (
    <GameContext.Provider value={{ 
      round, nextRound, resetRound, 
      words, addWord, removeWord,
      current_player, players, addPlayer, resetPlayers, nextPlayer,
    }}>
      {children}
    </GameContext.Provider>
  );
}


// Custom hook to easily access this context from any component
export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
}