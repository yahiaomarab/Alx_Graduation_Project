function SearchBar({ query, setQuery, onSearch }) {
    return (
      <div className="mb-4 flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l"
          placeholder="Search books by title..."
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    );
  }
  
  export default SearchBar;
  