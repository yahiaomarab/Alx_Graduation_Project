function BookCard({ book }) {
  return (
    <div className="book-card mb-4 p-4 border border-gray-300 rounded shadow bg-white dark:bg-gray-800 dark:border-gray-700 ">
      <img className="mb-2 " src={book.image} alt={book.title} />
      <h2 className="text-lg font-semibold mb-2 ">{book.title}</h2>
      <p className="text-gray-600 dark:text-gray-400  ">{book.description}</p>
    </div>
  );
}
export default BookCard;
