import "./style.css";
import { useState } from "react";
import data from "./data";

const Index = () => {
  const [selected, setSelected] = useState(null);

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    // setSelected(getCurrentId); // this line of code is used to open the accordian
    setSelected(getCurrentId === selected ? null : getCurrentId); // this line of code is used to open the accordian and close
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple]; // Here this line of code is used to copy the array
    const findIndexOfcurrentId = cpyMultiple.indexOf(getCurrentId); // Here this line of code is used to find the index of the current id
    console.log(findIndexOfcurrentId);
    if (findIndexOfcurrentId === -1)
      cpyMultiple.push(
        getCurrentId
      ); // Here this line of code is used to push the current id
    else cpyMultiple.splice(findIndexOfcurrentId, 1);

    setMultiple(cpyMultiple);
  };
  console.log(selected, multiple);

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className="acc-content ">{dataItem.answer}</div>
              ) : null} */}

              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1? (
                <div className="acc-content ">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
