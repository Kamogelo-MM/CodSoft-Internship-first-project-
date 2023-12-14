import React from "react";
import { useState } from "react";

export default function calculator() {
  const [value, setValue] = useState("");
  const [ready, setReady] = useState();

  function handleNumber(event) {
    setValue(value + event.target.name);
  }

  function handleClear(event) {
    setValue(event.target.name);
  }
  function handleBackSpace() {
    setValue(value.slice(0, -1));
  }

  function handleCalculations() {
    setValue(eval(value));
  }

  function switchON(event) {
    setReady({ ready: true });
    // when button is clicked
    //input text should switch on
  }

  function switchOff(event) {
    setReady({ ready: false });
    //when clicked twice switch off
  }
  //function :
  //should return null if setvalue ==false

  return (
    <div className="Calculator">
      <div container>
        <form>
          <input type="text" autoFocus="on" value={value} />
          <div className="keypad-buttons">
            <button
              type="button"
              onClick={switchON}
              onDoubleClick={switchOff}
              name="On"
            >
              On/Off
            </button>
            <button type="button" onClick={handleBackSpace} name="Del">
              Del
            </button>

            <button type="button" onClick={handleNumber} name="(">
              (
            </button>
            <button type="button" onClick={handleNumber} name=")">
              )
            </button>
            <button type="button" onClick={handleNumber} name="*">
              *
            </button>
            <button type="button" onClick={handleNumber} name="/">
              /
            </button>
            <button type="button" onClick={handleNumber} name="-">
              -
            </button>
            <button type="button" onClick={handleNumber} name="+">
              +
            </button>
            <button type="button" onClick={handleNumber} name="9">
              9
            </button>
            <button type="button" onClick={handleNumber} name="8">
              8
            </button>
            <button type="button" onClick={handleNumber} name="7">
              7
            </button>
            <button type="button" onClick={handleNumber} name="6">
              6
            </button>
            <button type="button" onClick={handleNumber} name="5">
              5
            </button>
            <button type="button" onClick={handleNumber} name="4">
              4
            </button>
            <button type="button" onClick={handleNumber} name="3">
              3
            </button>
            <button type="button" onClick={handleNumber} name="2">
              2
            </button>
            <button type="button" onClick={handleNumber} name="1">
              1
            </button>
            <button type="button" onClick={handleNumber} name="0">
              0
            </button>
            <button type="button" onClick={handleClear} name=" ">
              Clr
            </button>
            <button type="button" onClick={handleCalculations} name="=">
              =
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
