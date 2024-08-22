import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <h2 className="p-10 text-lg">Counter</h2>
      <input value={counter} className="block text-lg font-medium  text-gray-900" readOnly />
      <button
        type="button"
        onClick={increase}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-10"
      >
        +
      </button>
      <button
        type="button"
        onClick={decrease}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
