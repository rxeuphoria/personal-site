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
      navtitle: "home",
      maintitle: "hello",
      subtitle: "efficiency is my obsession",
      subtext: "min/maxing my time off",
    },
    {
      index: 1,
      navtitle: "articles",
      maintitle: "articles",
      subtitle: "",
      subtext: "coming soon",
    },
    {
      index: 2,
      navtitle: "contact",
      maintitle: "cast a lure",
      subtitle: "based in detroit, mi",
      subtext: "benchackerman@gmail.com",
    },
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
