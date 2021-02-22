import React, { useState } from "react";

const Toggable = props => {
  const [active, setActive] = useState(false);
  // const handleEvent = () => setActive(!active);
  const handleEvent = d => setActive(d);
  const { positive, negative } = props;
  return (
    <div>
      <div
        onMouseEnter={() => handleEvent(true)}
        onMouseLeave={() => handleEvent(false)}
      >
        {active ? <div>{positive}</div> : <div>{negative}</div>}
      </div>
    </div>
  );
};

// const ActiveMan = () => <div>I'm Positive</div>;
// const NegativeMan = () => <div>I'm Negative</div>;
// const Demo = () => (
//   <Toggable
//     positive={
//       <div>
//         <ActiveMan />
//       </div>
//     }
//     negative={
//       <div>
//         <NegativeMan />
//       </div>
//     }
//   />
// );
// export default Demo;

export default Toggable;
