
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Checkbox } from "semantic-ui-react";
import { LayoutToggle } from "../LayoutToggle";

configure({ adapter: new Adapter() });

describe("Header component", () => {
  let wrapper;
  const mockProps = {
    setChecked: jest.fn(),
    checked: true,
  };
  beforeEach(() => {
    wrapper = shallow(<LayoutToggle {...mockProps} />);
  });

    it("should render Checkbox", () => {
      expect(wrapper.find(Checkbox).exists()).toBe(true);
      expect(wrapper.find(Checkbox).prop("label")).toEqual("Toggle Layout");
      expect(wrapper.find(Checkbox).prop("type")).toEqual("checkbox");
    });
  });

