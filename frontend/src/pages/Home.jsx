import { useEffect, useState } from "react";
import { getBooks } from "../services/api";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(setBooks);
    }, []);

    return (
        <>
            {books.map(book => (
                <div key={book.id}>{book.title}</div>
            ))}
        </>
    );
}