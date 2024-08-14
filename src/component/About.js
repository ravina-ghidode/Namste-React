import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //Api Call
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"Ravina"} location={"Bhopal"} />
      </div>
    );
  }
}
export default AboutClass;
