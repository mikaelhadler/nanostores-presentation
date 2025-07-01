import { persistentAtom } from "@nanostores/persistent";
import { loadEngine } from "../utils/getStorageEngine";

loadEngine();

export const counterAtom = persistentAtom<number>(
  "persistent-localstorage",
  0,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
