import React, { useState } from "react";
import ToDolists from "./ToDolists.jsx";

const App = () => {
  const [item, setItem] = useState("");
  const [finalitem, setfinalItem] = useState([]);

  const setEventOne = (event) => {
    // console.log(event.target.value);
    setItem(event.target.value);
  };

  const Add = () => {
    setfinalItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  const deleteItems = (id) => {
    setfinalItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="heading"> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={item}
            onChange={setEventOne}
          />
          <button onClick={Add}> + </button>
          <ol>
            {finalitem.map((currValue, index) => {
              return (
                <ToDolists
                  id={index}
                  key={index}
                  text={currValue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
