import React from "react";

function Profile({fullName, bio, profession}) {
  return (
    <div>
      <h1>{fullName}</h1>
      <h1>{bio}</h1>
      <h1>{profession}</h1>
    </div>
  );
}

export default Profile;
