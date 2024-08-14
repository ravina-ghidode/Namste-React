import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "ravu",
        location: "Mumbai",
        avatar_url: "http:dummy-photo",
      },
    };
  }
  async componentDidMount() {
    //Api Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsondata = await data.json();

    this.setState({
      userInfo: jsondata,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="photo" />
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}
export default UserClass;
