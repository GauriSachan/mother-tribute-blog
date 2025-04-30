import { useState } from 'react'
import HeroCarousel from '../components/HeroCarousel'
import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import articles from '../data/articles.json'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter logic
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">Mother’s Day Tribute Blog</h1>
      <HeroCarousel />

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories */}
      <div className="flex gap-4 my-6 justify-center">
        {['Stories', 'Health', 'Inspiration'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category ? 'bg-pink-400 text-white' : 'bg-pink-200 hover:bg-pink-300'
            }`}
          >
            {category}
          </button>
        ))}
        <button onClick={() => setSelectedCategory(null)} className="underline text-sm">Clear</button>
      </div>

      {/* Recent Articles */}
      <h2 className="text-2xl font-semibold my-4">Recent Articles</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No articles found.</p>
        )}
      </div>
    </div>
  )
}
