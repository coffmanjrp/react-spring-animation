import { useSpring, animated } from 'react-spring';

const c2Style = {
  padding: '1.5rem',
  backgroundColor: 'slateblue',
  color: 'white',
};

const ComponentTwo = () => {
  const props = useSpring({
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
    <animated.div style={props}>
      <div style={c2Style}>
        <h1>ComponentTwo</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio
          corporis perspiciatis assumenda quae iure iusto fugit, quas tenetur!
          Quasi fugit praesentium ut ea sint id deserunt optio earum soluta!
        </p>
      </div>
    </animated.div>
  );
};

export default ComponentTwo;
