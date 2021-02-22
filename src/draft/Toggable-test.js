import React, { useState } from "react";

const Toggable = () => {
  const [isClicked, setClicked] = useState(true);
  const [count, setCount] = useState(0);

  let pizza;
  isClicked ? (pizza = <div>hello</div>) : (pizza = <div>motto</div>);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <button
        onClick={() => {
          setClicked(!isClicked);
          console.log("hello");
        }}
      >
        {isClicked ? <div>hello</div> : <div>moto</div>}
      </button>
      <div>{pizza}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
  // return <button onClick={() => setClicked(!isClicked)}>{Pizza}</button>;
};

export default Toggable;
