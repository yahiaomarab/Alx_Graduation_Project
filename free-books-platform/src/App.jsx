import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Free Books Platform</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:olid" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
