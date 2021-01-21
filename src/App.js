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
    </div>
  );
}

export default App;
