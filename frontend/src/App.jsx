import './App.css'
import { useEffect, useState } from "react";
import Navbar from './components/Navbar';

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

    <Navbar/>


<div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">


      {book.map((data) => (
        <div key={data.id}>
          <h3 className="font-bold text-xl">{data.title}</h3>
          <p className="text-gray-500" >{data.description}</p>
          <img
    src={data.image}
    alt={data.title}
    width={200}
/>
        </div>

        
      ))}
</div>
    </>
  )
}

export default App