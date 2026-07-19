function CategorySection({ books }) {
  return (
    <section className="bg-zinc-900 py-14">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold uppercase text-white mb-8">
          {books.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {books.map((book) => (
            <article key={book.id}>

              <img
                src={book.image}
                alt={book.title}
                className="w-full aspect-[4/3] object-cover rounded"
              />

              <h3 className="text-white font-bold text-xl mt-4 leading-tight">
                {book.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm line-clamp-3">
                {book.description}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;