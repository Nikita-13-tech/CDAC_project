import Data from "./components/Data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <wrapper>
      <Sidebar/>
      <main>
        <div className="app">
          <Header/>
        </div>
        <div>
          <Data/>
        </div>
      </main>
    </wrapper>
  );
}

export default App;
