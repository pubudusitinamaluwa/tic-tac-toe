import './App.css';
import Board from "./game/Board"

const App = ({turn}) => {
  return (
    <div className="App">
      <header className="App-header">
      <div className="status">{turn}</div><br/>
        <Board></Board>
      </header>
    </div>
  );
}

export default App;
