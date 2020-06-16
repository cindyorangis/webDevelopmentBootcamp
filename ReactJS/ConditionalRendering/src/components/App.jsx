import React from "react";

import Login from "./Login";
import Form from "./Form";

// var isLoggedIn = false;
// const currentTime = new Date().getHours();

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* Ternary */}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* AND Operator */}
      {/* {currentTime > 12 && <h1>Why are you still working?</h1>} */}

      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
