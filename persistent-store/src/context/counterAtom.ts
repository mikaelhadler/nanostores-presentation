import { persistentAtom } from "@nanostores/persistent";

export const counterAtom = persistentAtom<number>(
  "persistent-localstorage",
  0,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
