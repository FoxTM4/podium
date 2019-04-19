
import React from "react";
// Shallow: render top level component
// Deep: renders all of the nested components
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AllComments from "./AllComments";

configure({ adapter: new Adapter() });

//this creates a snap shot of what the code it in order for you to make sure your code does not get changed from what it is now in its current working state. 

describe("AllComments", () => {
  test("Render the All Comments Component", () => {
    const wrapper = shallow(<AllComments />);

    expect(wrapper).toMatchSnapshot();
  });
});

//Test is very important and I want to learn a lot more. I have never learned testing of such a simple project before. I normally test input boxes and information being passed in so nothing unwanted will be passed to the server. Learning to test better will be my top priority. 
