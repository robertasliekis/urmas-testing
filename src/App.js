// import Component1props from "./componentsOld/Component1props";
// import Component2refs from "./componentsOld/Component2refs";
// import Component3redux from "./componentsOld/Component3redux";
// import Component4useEffect from "./componentsOld/Component4useEffect";

import IntroWindow from "./components/IntroWindow";
import TopicSelection from "./components/TopicSelection";
import TopicWindow from "./components/TopicWindow";

function App() {
  //"homepage": "https://robertasliekis.github.io/urmas-testing/",
  return (
    <div className="website-wrapper">
      <IntroWindow />
      <TopicSelection />
      <TopicWindow />
      {/* <Component1props />
      <Component2refs />
      <Component3redux />
      <Component4useEffect /> */}
    </div>
  );
}

export default App;
