import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import textState from "./recoil/state";
import { textLength } from "./recoil/selector";

function Form() {
  const [v, setV] = useRecoilState(textState);
  const x = useRecoilValue(textLength);
  return (
    <form>
      <input value={v} onChange={e => setV(e.target.value)} />
      <h1>{x}</h1>
    </form>
  );
}

export default Form;
