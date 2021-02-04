import { useSpring, animated } from 'react-spring';

const c1Style = {
  padding: '1.5rem',
  backgroundColor: 'steelblue',
  color: 'white',
};

const ComponentOne = () => {
  const springAnimation = useSpring({
    marginTop: 0,
    opacity: 1,
    from: {
      marginTop: -500,
      opacity: 0,
    },
  });

  return (
    <animated.div style={springAnimation}>
      <div style={c1Style}>
        <h1>ComponentOne</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio
          corporis perspiciatis assumenda quae iure iusto fugit, quas tenetur!
          Quasi fugit praesentium ut ea sint id deserunt optio earum soluta!
        </p>
      </div>
    </animated.div>
  );
};

export default ComponentOne;
