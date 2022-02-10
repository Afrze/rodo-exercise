import "./App.css";
import Header from "./components/Header/Header";
import LayoutContainer from "./components/LayoutContainer/LayoutContainer";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import { DataContextProvider } from "./store/data-context";

function App() {
  return (
    <DataContextProvider>
      <LayoutContainer>
        <SearchContainer />
      </LayoutContainer>
    </DataContextProvider>
  );
}

export default App;
