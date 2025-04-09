import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookDetails() {
  const { olid } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/api/books?bibkeys=OLID:${olid}&format=json&jscmd=data`
      );
      setBook(response.data[`OLID:${olid}`]);
    } catch (err) {
      setError("Could not load book details.");
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [olid]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow">
      <img
        className="mb-4 mx-auto"
        src={`https://covers.openlibrary.org/b/olid/${olid}-L.jpg`}
        alt={book.title}
      />
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Author:</strong> {book.authors?.map((a) => a.name).join(", ")}
      </p>
      <p className="text-gray-600 dark:text-gray-400">{book.excerpts?.[0]?.text || "No description available."}</p>
    </div>
  );
}

export default BookDetails;
