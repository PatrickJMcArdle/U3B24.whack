import Field from "./Field";
import Home from "./Welcome";
import { useGame } from "./GameContext";

export default function App() {
  const {currentPage} = useGame()
  return (
    <div>
      <h1>Whack-a-Mole</h1>
      <>
        {currentPage === 'welcome' && <Home />}
        {currentPage === 'game' && <Field />}
      </>
    </div>
  );
}