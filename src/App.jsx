import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);

  const transitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const toggle = (e) => {
    setShow(!show);
  };

  return (
    <div>
      <ComponentOne />
      <ComponentTwo toggle={toggle} />
      <div>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <ComponentThree />
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};

export default App;
