import ReactDOM from "react-dom";
import { App } from "./App";

describe("App.tsx", () => {
  let root: HTMLDivElement;

  beforeEach(() => {
    root = document.createElement("div");
    ReactDOM.render(<App />, root);
  });

  test("it should display correct text content", () => {
    expect(root.querySelector("h1")?.textContent).toBe("TODOS");
    expect(root.querySelector("label")?.textContent).toBe(
      "What needs to be done?"
    );
    expect(root.querySelector("button")?.textContent).toBe("Add todo");
  });

  test("it should addTodo", () => {});
});
