import React from "react";
import { useEffect, useRef, useState } from "react"

function FirstTask() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevValueRef = useRef<string>("");
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`currentAmount : ${inputValue} | previousAmount : ${prevValueRef.current}`);
    prevValueRef.current = inputValue;
  };

  return <>
    <h1 className="w-full mt-3 font-bold text-[25px] flex justify-center items-center">First Task</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        submit
      </button>
    </form>
  </>;
};

export default FirstTask;
