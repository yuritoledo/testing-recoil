import React from "react";
import { useRecoilValue } from "recoil";
import textState from "./recoil/state";

function List() {
  const name = useRecoilValue(textState);
  console.log(name);
  return <span>{name}</span>;
}

export default List;
