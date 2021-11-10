import React, { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";
import Loading from "Pages/Loading";
// import Main from "./Pages/Main";
// import Project from "./Pages/Project";
const Main = React.lazy(() => import("./Pages/Main"));
const Project = React.lazy(() => import("./Pages/Project"));


function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // first rendering
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0,0);
    }, 2000);
  },[]);

  return (
    <>
      <Loading loading={loading}/>

      <Suspense fallback={<div />}>
        <div id="container" className={loading.toString()}>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/project/:id" component={Project} />
            </Switch>
          </AnimatePresence>
        </div>
      </Suspense>
    </>
  );
}

export default React.memo(App);
