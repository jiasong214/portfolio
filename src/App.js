import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";
import Main from "./Pages/Main";
import Project from "./Pages/Project";
import Loading from "Pages/Loading";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // first rendering
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  return (
    <>
      <Loading loading={loading}/>
      {loading ||
        <div id="container" className={loading}>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/project/:id" component={Project} />
            </Switch>
          </AnimatePresence>
        </div>
      }
    </>
  );
}

export default React.memo(App);
