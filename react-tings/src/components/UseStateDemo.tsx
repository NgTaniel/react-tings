import React, { useState } from "react";
import "../pages/DemoPage/DemoPage.css"

export default function UseStateDemo() {
  // This will update your number value, however this will not update nor display on the frontend
  let num = 6969;
  const numUpdate = () => {
    num = num + 1;
    console.log("num is " + num);
  }

  // This will actually update/increment the number value on the frontend, since the setCount function changes the value of the state when it is being interacted with, this is known as re-rendering
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
    console.log("count " + count);
  }

  const [text, setText] = useState<string>("sussy");
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <div id="usestate-card">
        <p>How important is UseState like actuals</p>
        <button onClick={() => numUpdate()}>numb is {num}</button>
        <button onClick={() => handleCount()}>count is {count}</button>
        <hr/>

        <div id="text-card">
          <input style={{backgroundColor: "white", color: "black", fontWeight: "bold" }} value={text} onChange={handleTextChange}/>
          <p>Your input is {text}</p>
          <button onClick={() => setText("sussy")}>Reset</button>
        </div>
      </div>
    </div>
  )
}
