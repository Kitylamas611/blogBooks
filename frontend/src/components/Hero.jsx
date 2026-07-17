function Hero({ book }) {
    return (
        <section className="grid lg:grid-cols-2 gap-8 py-12">

            <img
                src={book.cover}
                className="rounded-xl h-[500px] w-full object-cover"
            />

            <div>

                <span className="text-red-600 font-bold uppercase">
                    Destacado
                </span>

                <h1 className="text-5xl font-black mt-4">
                    {book.title}
                </h1>

                <p className="mt-6 text-gray-600">
                    {book.description}
                </p>

            </div>

        </section>
    );
}