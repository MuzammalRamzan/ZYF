import React, { useState } from "react";
import Home from "./containers/Home";
import "./App.css";
import Background from "./asset/Background.svg";
import Header from "../src/landigPage/Header";

function App() {
  const [goToHome, setGoToHome] = useState(false);

  const redirectToHome = () => {
    setGoToHome(true);
  };
  const redirectToIntro = () => {
    setGoToHome(false);
  };

  return (
    <div
      className={goToHome && "App"}
      style={
        goToHome
          ? {
              background: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      {goToHome ? (
        <Home redirectToIntro={redirectToIntro} />
      ) : (
        <Header redirectToHome={redirectToHome} />
      )}
    </div>
  );
}

export default App;
