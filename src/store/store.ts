import { useState, useEffect } from 'react';

export type DispatchObject = (id: string, payload: any) => void;

let globalState = {};
let listeners: ((state: {}) => void)[] = [];
let actions: {[key: string]: (state: {}, payload: any) => {}} = {};

export const useStore = (shouldListen = true): [{}, DispatchObject] => {
  const setState = useState(globalState)[1];

  const dispatch = async (id: string, payload: any) => {
    console.log(`${id} [BEFORE]: `, globalState);
    const newState = await actions[id](globalState, payload);
    globalState = { ...globalState, ...newState };
    console.log(`${id} [AFTER]: `, globalState);

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions: {}, initialState: {}) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
