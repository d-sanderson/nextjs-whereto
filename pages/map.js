import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MapPage = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  if (isAuthenticated) {
    return <div>MAP HERE</div>;
  } else {
    return (
      <div>
        <span className="text-white font-bold">NOT AUTHORIZED</span> <button onClick={loginWithPopup} className="btn-purple">Login</button>
      </div>
    );
  }
};

export default MapPage;
