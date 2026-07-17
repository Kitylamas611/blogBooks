function BookCard({ book }) {

    return (

<div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">

<img
src={book.cover}
className="h-72 w-full object-cover"
/>

<div className="p-5">

<h2 className="font-bold text-xl">
{book.title}
</h2>

<p className="text-gray-500">
{book.author}
</p>

</div>

</div>

    )

}