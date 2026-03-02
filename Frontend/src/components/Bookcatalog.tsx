import { useState } from 'react';

const MOCK_BOOKS = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics" },
  { id: 2, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi" },
  { id: 3, title: "Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Mystery" },
  { id: 4, title: "1984", author: "George Orwell", genre: "Classics" },
];

const BookCatalog = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState(''); // New State le el Search

  // Logic: Filter by Genre AND Search by Title
  const filteredBooks = MOCK_BOOKS.filter(book => {
    const matchesGenre = filter === 'All' || book.genre === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ivory p-10 font-serif">
      <div className="max-w-6xl mx-auto">
        <header className="border-b border-burgundy pb-6 mb-10">
          <h2 className="text-3xl text-navy-gold uppercase tracking-tighter mb-6 text-center">Library Catalog</h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* 1. Search Bar */}
            <input 
              type="text"
              placeholder="Search by title or author..."
              className="bg-white border border-burgundy p-2 w-full md:w-96 text-navy-gold outline-none focus:ring-1 focus:ring-burgundy transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* 2. Genre Filter */}
            <select 
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-burgundy p-2 text-navy-gold outline-none w-full md:w-auto"
            >
              <option value="All">All Genres</option>
              <option value="Classics">Classics</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Mystery">Mystery</option>
            </select>
          </div>
        </header>

        {/* Results Counter */}
        <p className="text-sm text-gray-500 mb-4 italic">Showing {filteredBooks.length} results</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white p-6 border border-gray-100 shadow-sm hover:border-burgundy transition-all group">
              <div className="h-48 bg-ivory mb-4 flex items-center justify-center text-gray-300 italic group-hover:bg-gray-50 transition-colors">Book Cover</div>
              <h3 className="text-xl text-navy-gold mb-1 group-hover:text-burgundy transition-colors">{book.title}</h3>
              <p className="text-gray-600 text-sm">by {book.author}</p>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-burgundy font-bold border-t pt-2">{book.genre}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;