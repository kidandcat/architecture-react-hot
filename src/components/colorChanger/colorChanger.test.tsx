import * as React from "react";
import { shallow } from "enzyme";

import { ColorChanger } from "./colorChanger.component";

test("<ColorChanger />", () => {
  const wrapper = shallow(<ColorChanger />);
  const input = wrapper.find("input");

  input.simulate("change", { currentTarget: { value: "red" } });

  //expect(Store.color.tempValue).toBe("red");

  wrapper.find("button").simulate("click");

  //expect(Store.color.value).toBe("red");
  expect(wrapper).toMatchSnapshot();
});
