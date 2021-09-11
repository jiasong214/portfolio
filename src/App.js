import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";
import Main from "./Pages/Main";
import Casestudy from "./Pages/Casestudy";


function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState("");

  // first rendering
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded("is-loaded");
    }, 500);
  },[])

  return (
    <div id="container" className={isLoaded} >
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/casestudy/:id" component={Casestudy} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default React.memo(App);
