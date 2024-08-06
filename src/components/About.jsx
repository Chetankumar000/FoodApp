import React from "react";
import User from "./User";
import UserClass from "./UserClass";

function About() {
  return (
    <div>
      <h1>About us</h1>
      {/* <User name={"Chetankumar (function)"} /> */}
      <UserClass name={"Chetankumar (class)"} />
    </div>
  );
}

export default About;
