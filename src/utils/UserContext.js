import { createContext } from "react";

const UserContext = createContext({
  logUser: "Default User",
});

export default UserContext;
