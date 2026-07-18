import './App.css'
import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import TrendingSection from './components/TrendingSection'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'

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

      <Navbar />

      {/* content */}
      <main className="max-w-7xl mx-auto px-6 mt-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contenido principal */}
          <section className="lg:col-span-2">





            {book.map((data) => (
              <article key={data.id} className='bg-white rounded-xl shadow-lg overflow-hidden mb-8'>

                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-3">
                    {data.title}
                  </h2>

                  <p className="text-gray-600">
                    {data.description}
                  </p>
                </div>

              </article>

            ))}

          </section>

          {/* Sidebar */}
          <aside className="hidden lg:block">

            <div className="sticky top-24">

              <h2 className="font-bold text-xl mb-4">
                Más libros
              </h2>

              {book.slice(0, 5).map((data) => (
                <div
                  key={data.id}
                  className="flex gap-3 mb-4 border-b pb-4"
                >
                  <img
                    src={data.image}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {data.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>

          </aside>

          <TrendingSection books={book} />

         

        </div>
      </main>
               <CategorySection books={book} />

              <Footer/>


    </>
  )
}

export default App