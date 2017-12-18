import * as React from "react";
import { shallow } from "enzyme";

import { App } from "./app";

test("Render Hello World!", () => {
  const app = shallow(<App />);
  expect(app.contains("Hello World!")).toBe(true);
});
