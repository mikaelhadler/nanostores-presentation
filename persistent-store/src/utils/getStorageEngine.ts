import {
    setPersistentEngine,
    type PersistentListener,
  } from "@nanostores/persistent";
  
  export function getStorageEngine(): Storage {
    const engineName = import.meta.env.PUBLIC_PERSISTENT_ENGINE_STORAGE;
  
    if (typeof window === "undefined") {
      throw new Error("Storage engine cannot be accessed on the server.");
    }
  
    switch (engineName) {
      case "localStorage":
        return window.localStorage;
      case "sessionStorage":
        return window.sessionStorage;
      default:
        throw new Error(`Unsupported storage engine: ${engineName}`);
    }
  }
  
  export const loadEngine = () => {
    if (typeof window !== "undefined") {
      let listeners: Array<PersistentListener> = [];
      setPersistentEngine(getStorageEngine(), {
        addEventListener(_, callback) {
          listeners.push(callback);
        },
        removeEventListener(_, callback) {
          listeners = listeners.filter((i) => i !== callback);
        },
        // window dispatches "storage" events for any key change
        // => One listener for all map keys is enough
        perKey: false,
      });
    }
  };
  