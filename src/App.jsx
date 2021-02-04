import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
};

export default App;
