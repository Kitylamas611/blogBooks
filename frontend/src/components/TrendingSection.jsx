import { useEffect, useState } from "react";

function TrendingSection({ books }) {

 const [book, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-16 px-6">

      <h2 className="text-4xl font-bold uppercase mb-8">
        Trending News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {book.map((book) => (
          <article key={book.id}>

            <img
              src={book.image}
              alt={book.title}
              className="w-full aspect-[4/3] object-cover"
            />

            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold leading-tight">
              {book.title}
            </h3>

          </article>
        ))}
      </div>

    </section>
  );
}

export default TrendingSection;

