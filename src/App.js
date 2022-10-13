import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { ItemsContainer } from "./routes/ItemsContainer/ItemsContainer";
import { ItemDetail } from "./routes/ItemDetail/ItemDetail";
import { CategoryDetail } from "./routes/CategoryDetail/CategoryDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar />
        <Routes>
          {/* <Route path="/" element={<SearchBar />} /> */}
          <Route path="/" element={<></>} />
          <Route path="/items" element={<ItemsContainer />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/categories/:id" element={<CategoryDetail />} />
          {/* <Route path="/notfound" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
