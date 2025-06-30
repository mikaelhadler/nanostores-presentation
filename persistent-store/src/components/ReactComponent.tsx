import React from "react";

import { useStore } from "@nanostores/react";

import { counterAtom } from "../context/counterAtom";

import type { FunctionComponent } from "react";

export const ReactComponent: FunctionComponent = (props) => {
  const $counter = useStore(counterAtom);
  return (
    <div className="bg-sky-100 p-6 rounded-xl">
      <h2 className="text-sky-950 text-xl font-bold"> React component</h2>
      <p>
        Counter: <b>{$counter}</b>
      </p>
    </div>
  );
};
