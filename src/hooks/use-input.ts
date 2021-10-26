import React, { useState } from "react";

export const useInput = <T extends unknown, TChange2 extends unknown, TChange3 extends unknown>
  (
    validate: (value: T) => boolean, 
    defaultValue: T, 
    customChangeHandler: (dispatch: React.Dispatch<React.SetStateAction<T>>, arg2: TChange2, arg3: TChange3) => void
  ) => {

  const [ inputValue, setInputValue ] = useState<T>(defaultValue);
  const [ isTouched, setIsTouched ] = useState(false);

  const isValid = validate(inputValue);
  const hasError = isTouched && !isValid;

  const changeHandler = (...args: unknown[]) => {
    // setInputValue(event.target.value);
    customChangeHandler(setInputValue, args[0] as TChange2, args[1] as TChange3);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue(defaultValue);
    setIsTouched(false);
  }

  return {
    value: inputValue,
    isTouched,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};