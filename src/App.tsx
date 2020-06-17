import * as React from "react";
import { RecoilRoot } from "recoil";
import List from "./list";
import Form from "./form";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Form />
        <List />
      </div>
    </RecoilRoot>
  );
}
