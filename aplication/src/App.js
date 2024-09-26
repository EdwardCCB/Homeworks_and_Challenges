import logo from './logo.svg';
import './App.css';
import CounterComponent from "./components/CounterComponent.jsx";

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterComponent value = {10} />
    </div>
  );
}

export default App;
