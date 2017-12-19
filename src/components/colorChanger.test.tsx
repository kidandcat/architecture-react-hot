import * as React from "react";
import { shallow } from "enzyme";

import { ColorChanger } from "./colorChanger";

test("<ColorChanger />", () => {
  const wrapper = shallow(<ColorChanger />);
  expect(wrapper).toMatchSnapshot();
});
