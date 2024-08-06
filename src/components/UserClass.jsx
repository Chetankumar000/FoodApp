import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: { name: "", location: "default" },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Chetankumar000");
    const json = await data.json();
    this.setState({
      info: json,
    });
    console.log(json);
  }

  componentDidUpdate() {}

  render() {
    const { name, location, avatar_url } = this.state.info;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2> Name : {name}</h2>
        <h3>Location : {location} </h3>
        <h4> Contact : @chetanmistry000</h4>
        <UserContext.Consumer>
          {(data) => <h1>{data.logUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
