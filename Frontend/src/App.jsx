import { useState } from 'react';
import BookCatalog from './components/BookCatalog';
import RecommendationFeed from './components/RecommendationFeed';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="min-h-screen bg-ivory font-serif">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-burgundy p-4 flex justify-center gap-8 shadow-sm">
        <button 
          onClick={() => setCurrentTab('home')}
          className={`uppercase tracking-widest text-sm transition-all pb-1 ${
            currentTab === 'home' ? 'text-burgundy border-b-2 border-burgundy' : 'text-navy-gold hover:text-burgundy'
          }`}
        >
          Home Feed
        </button>
        <button 
          onClick={() => setCurrentTab('catalog')}
          className={`uppercase tracking-widest text-sm transition-all pb-1 ${
            currentTab === 'catalog' ? 'text-burgundy border-b-2 border-burgundy' : 'text-navy-gold hover:text-burgundy'
          }`}
        >
          Library Catalog
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="p-6">
        {currentTab === 'home' ? <RecommendationFeed /> : <BookCatalog />}
      </main>
    </div>
  );
}

export default App;