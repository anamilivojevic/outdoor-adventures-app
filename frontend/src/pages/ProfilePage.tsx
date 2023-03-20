import { useState } from "react";

type customProps = {
  onLogin: LoginProps;
};

const ProfilePage = ({ userLogged }: userLoggedProps): JSX.Element => {
  return (
    <main className="my-4">
      <div className="container">
        <h2>Profile</h2>
      </div>
    </main>
  );
};

export default ProfilePage;
