import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import SearchPanel from "./components/SearchPanel";
import Title from "./components/Title"
import AllConferences from "./components/AllConferences";

function App() {
  return (
      <div>
          <Navbar/>
          <SearchPanel/>
          <Title title={'Конференции'}/>
          <AllConferences/>
      </div>
  );
};

export default App;
