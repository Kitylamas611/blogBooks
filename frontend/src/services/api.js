// services/api.js

const API = "http://localhost:8000/api";

export async function getBooks() {
    const response = await fetch(`${API}/books`);
    return response.json();
}