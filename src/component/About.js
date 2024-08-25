import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
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
        <div>
          Logged in user
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-lg">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Ravina"} location={"Bhopal"} />
      </div>
    );
  }
}
export default AboutClass;
