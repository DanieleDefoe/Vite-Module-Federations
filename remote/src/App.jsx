import Button from './Button';
import './App.css';
import useCount from './store';

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="card">
      <h1>Remote application</h1>
      <Button />
      <button
        style={{ marginTop: 30 }}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
