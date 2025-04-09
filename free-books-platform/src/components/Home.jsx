import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("harry potter");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      setBooks(response.data.docs.slice(0, 15)); // show first 15 books
    } catch (err) {
      setError("Failed to fetch books. Try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default Home;
