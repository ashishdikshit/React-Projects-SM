import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  //   console.log("Key :", key, "value :", defaultValue);
  //"theme", "dark" => here key is theme and defaultValue is dark

  const getcurrentValue = () => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
        // Reads from localStorage using the given key.
        // If it finds data → parses and returns it.
        // If not or if parsing fails → falls back to defaultValue.
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  };

  console.log(getcurrentValue());

  const [value, setValue] = useState(getcurrentValue); // Pass the function reference (not the function call) to useState:
  // we can write is as => useState(() => getCurrentValue()) 
  // React only calls this function once when the component mounts — it’s called a lazy initializer.
 // Both same 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

// export default function useLocalStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     const stored = localStorage.getItem(key);
//     return stored ? JSON.parse(stored) : defaultValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }
