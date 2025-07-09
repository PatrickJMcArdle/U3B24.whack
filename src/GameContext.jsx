import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext()

export function GameProvider({children}) {
    //need a function to regenerate mole location on click (to be used in field.jsx)
    const NUM_HOLES = 9;
    const [moleIndex, setMole] = useState(Math.floor(Math.random() * NUM_HOLES))

    const toggleMole = () => setMole((Math.floor(Math.random() * NUM_HOLES)))

    //need a function to keep score per on click as well
    const [score, setScore] = useState(0);

    const addScore = () => {
        setScore(prevScore => prevScore + 1)
    }

    const resetScore = () => {
        setScore(prevScore => prevScore * 0)
    }

    //need a function to swap between welcome and field
    const [currentPage, setCurrentPage] = useState('welcome');

    const changePage = () => {
        if(currentPage === 'welcome') {
            setCurrentPage('game')
        } else {
            setCurrentPage('welcome')
        }
    }

    //values
    const value = {NUM_HOLES, moleIndex, toggleMole, score, addScore, resetScore, currentPage, changePage};
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame() {
    const context = useContext(GameContext)

    if(!context)
        throw Error("useGame must be used within a Game Context Provider")
    return context;
}