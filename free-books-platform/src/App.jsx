import "./App.css";
import BookCard from "./components/BookCard";
function App() {
  return (
    <div>
      <h1>Free Books Platform</h1>
      <BookCard
        book={{
          title: "Book 1",
          author: "Author 1",
          description: "Description 1",
          image:
            "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
        }}
      />
    </div>
  );
}

export default App;
