import { useGame } from "./GameContext"

export default function Home() {
  const {changePage} = useGame()
    return (
        <div>
          <div>
            <h2>Welcome to Whack-A-Mole!</h2>
            <p>How To Play?</p>
            <p>Click on a mole to earn points!</p>
          </div>
          <div>
            <button onClick={() => changePage()}>
                Play
            </button>
          </div>
        </div>
    )
}