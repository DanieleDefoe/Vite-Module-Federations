import './Button.css';
import useCount from './store';

const Button = () => {
  const [state, setState] = useCount();

  return (
    <div>
      <button
        className="shared-btn"
        onClick={() => setState((prev) => prev + 1)}
      >
        Click me {state}
      </button>
    </div>
  );
};

export default Button;
