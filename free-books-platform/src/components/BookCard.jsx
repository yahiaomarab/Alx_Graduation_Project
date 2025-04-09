import { Link } from "react-router-dom";

function BookCard({ book }) {
  const olid = book.cover_edition_key || book.edition_key?.[0];

  return (
    <Link to={`/book/${olid}`}>
      <div className="book-card mb-4 p-4 border border-gray-300 rounded shadow bg-white dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:shadow-lg transition">
        <img
          className="mb-2 w-full h-60 object-cover"
          src={`https://covers.openlibrary.org/b/olid/${olid}-M.jpg`}
          alt={book.title}
        />
        <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{book.author_name?.join(", ")}</p>
      </div>
    </Link>
  );
}

export default BookCard;
