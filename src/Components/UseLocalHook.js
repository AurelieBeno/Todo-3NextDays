import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Pase stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  //
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // allow value to be a function so we hame same API as useState
      const valueToStore =
        value instanceof Function
          ? value(storedValue)
          : value;
      // Save the state
      setStoredValue(valueToStore);
      // Save the local storage
      window.localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
export default useLocalStorage;
