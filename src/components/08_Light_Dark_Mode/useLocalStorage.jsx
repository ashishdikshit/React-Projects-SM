import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  //   console.log("Key :", key, "value :", defaultValue);

  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

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
