import * as React from "react";
import { shallow } from "enzyme";

import { Clock } from "./clock";

test("<Clock />", () => {
  const wrapper = shallow(<Clock />);
  expect(wrapper).toMatchSnapshot();
});
