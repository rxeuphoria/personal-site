import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [pages] = useState([
    {
      index: 0,
      navtitle: "",
      maintitle: "hello",
      subtitle: "i work in fintech",
      subtext: "(not the pretty UI parts, if that wasn't readily apparent)",
    },
    {
      index: 1,
      navtitle: "about",
      maintitle: "",
      subtitle: "this webapp is about",
      subtext: "being a deployable playground for stuff i want to toy with in react. it changes, and doesn't have a theme. it's also nice to have something out there that people can look at, even if it's not what you're best at.",
    },
    {
      index: 2,
      navtitle: "contact",
      maintitle: "",
      subtitle: "help get me to seattle",
      subtext: "↓(via employment)↓",
    }
  ]);
  const [index, setIndex] = useState(0);

  function selectPage(value) {
    setIndex(value);
  }

  return (
    <div className="App">
      <AppContainer>
        <Navigation pages={pages} selectPage={selectPage} />
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={index}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
              <Body pages={pages} index={index} />
          </CSSTransition>
        </SwitchTransition>
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
