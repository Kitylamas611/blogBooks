import './App.css'
import { useEffect, useState } from "react";


function App() {
  const [book, setBooks] = useState([]);
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>

      <h1>Mis books</h1>

      {book.map((data) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      ))}

    </>
  )
}

export default App
