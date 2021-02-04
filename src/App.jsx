import ComponentOne from './components/ComponentOne';
import './App.css';

const c1Style = {
  padding: '1.5rem',
  backgroundColor: 'steelblue',
  color: 'white',
};

const App = () => {
  return (
    <div style={c1Style}>
      <ComponentOne />
    </div>
  );
};

export default App;
