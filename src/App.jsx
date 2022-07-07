import { useEffect } from "react";
import { loadVanta } from "./Components/Vanta.js";
import MainRender from "./Components/MainRender.jsx";
import { VantaDiv, Main } from "./Styles/App";

function App({}) {
  useEffect(() => {
    loadVanta();
    setTimeout(() => {
      const getMain = document.querySelector(Main);
      getMain.style.opacity = 1;
    }, 700);
  }, []);

  return (
    <div className="App">
      <VantaDiv id="vanta"></VantaDiv>
      <Main className="main">
        <MainRender />
      </Main>
    </div>
  );
}

export default App;
