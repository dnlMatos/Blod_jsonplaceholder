import "./App.css";
import GlobalState from "./globalContext/GlobalState";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
