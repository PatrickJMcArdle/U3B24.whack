import { useGame } from "./GameContext";


export default function Field() {
  const {NUM_HOLES, moleIndex, toggleMole, score, addScore, changePage, resetScore} = useGame(); 
  // Pick a random index for the mole

  return (
    <div>
      <span>
        <h3>Score: {score}</h3>
        <button onClick={() => {changePage(); resetScore(); toggleMole();}}>Restart</button>
      </span>
    
      <ul className="field">
        {Array.from({ length: NUM_HOLES }).map((_, i) => (
          <li 
            key={i}
            className={`hole${i === moleIndex ? " mole" : ""}`}
            onClick={() => {if(i === moleIndex) toggleMole(); if(i === moleIndex) addScore();}}
          ></li>
        ))}
      </ul>
    </div>
  );
}