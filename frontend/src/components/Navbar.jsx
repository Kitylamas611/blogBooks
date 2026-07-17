function Navbar() {
  return (

<nav className="border-b bg-white sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center h-16">

<h1 className="font-black text-3xl">
BookBlog
</h1>

<ul className="hidden md:flex gap-8">

<li>Home</li>

<li>Books</li>

<li>Authors</li>

<li>Categories</li>

</ul>

</div>

</nav>

  );}

  export default Navbar