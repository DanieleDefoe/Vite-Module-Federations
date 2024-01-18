import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import ButtonModule from 'remote/Button';

const Button = ButtonModule.default;

console.log(Button);

const App = () => (
  <div className="container">
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

const rootNode = document.getElementById('app');

const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <App />
    <Button />
  </StrictMode>
);
