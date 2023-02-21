import React, { useState } from "react";

type Operator = "+" | "-" | "*" | "/";

const App = () => {
  const [input, setInput] = useState("");

  const handleNumberClick = (number: string) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperationClick = (operation: Operator) => {
    setInput((prevInput) => prevInput + operation);
  };

  const handleClearClick = () => {
    setInput("");
  };

  const handleBackspaceClick = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handlePercentageClick = () => {
    setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
  };

  const handleEqualsClick = () => {
    if (input.length > 0) {
      setInput((prevInput) => eval(prevInput).toString());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <input
        type="text"
        value={input}
        className="w-64 h-12 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        readOnly
      />
      <div className="mt-4 grid grid-cols-4 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearClick}
        >
          C
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handlePercentageClick}
        >
          %
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleOperationClick("/")}
        >
          /
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleOperationClick("*")}
        >
          *
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleOperationClick("-")}
        >
          -
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleOperationClick("+")}
        >
          +
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleBackspaceClick}
        >
          &#x2190;
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick(".")}
        >
          .
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
          onClick={handleEqualsClick}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
