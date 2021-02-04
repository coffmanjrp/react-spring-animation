import { useSpring, animated } from 'react-spring';

const c2Style = {
  padding: '1.5rem',
  backgroundColor: 'slateblue',
  color: 'white',
};

const btn = {
  margin: '15px 0',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  border: 'none',
  color: '#fff',
  textTransform: 'uppercase',
};

const ComponentTwo = (props) => {
  const springAnimation = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    delay: 1000,
    config: {
      duration: 1000,
    },
  });

  return (
    <animated.div style={springAnimation}>
      <div style={c2Style}>
        <h1>ComponentTwo</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio
          corporis perspiciatis assumenda quae iure iusto fugit, quas tenetur!
          Quasi fugit praesentium ut ea sint id deserunt optio earum soluta!
        </p>
        <button style={btn} onClick={props.toggle}>
          Toggle Component Three
        </button>
      </div>
    </animated.div>
  );
};

export default ComponentTwo;
