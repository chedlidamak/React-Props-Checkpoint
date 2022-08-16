import React from "react";
import Profile from "./Profile/Profile";
import Picture from "./Profile/Image";
import ActionLink from "./Profile/alert";

const myPage = {
  backgroundColor: "lightblue",
  lineHeight: 2,
  padding: 5,
  textAlign: "center",
};
const userName = {
  textDecoration: "underline",
  border: "1px solid red",
};

const App = () => {
  return (
    <div style={myPage}>
      <h2 style={userName}>Hello from my first component !!</h2>
      <Profile
        fullName="Chedli Damak"
        bio="An ambitious, and innovative individual with two years of experience linked to
task coordination, work planning, project management, verification, and
procurement management."
        profession="Looking for an opportunity"
      />
      <Picture src={"balha.jpg"}></Picture>
      <ActionLink />
    </div>
  );
};
export default App;
