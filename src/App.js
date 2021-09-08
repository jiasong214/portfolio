import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Casestudy from "./Pages/Casestudy";

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState("");

  // scroll initialize with page transition
  useEffect(() => {
    if(location.pathname !== "/"){
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // first rendering
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded("is-loaded");
    }, 500);
  },[])


  return (
    <div id="container" className={isLoaded}>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={{ enter: 800, exit: 800 }}
          classNames="page"
          onExit={node => {
            node.style.position = "fixed";
            node.style.top = -1 * window.scrollY + "px";
          }}
        >

          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/casestudy/:id" component={Casestudy} />
          </Switch>

        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default React.memo(App);
