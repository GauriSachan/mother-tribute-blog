export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <div className="flex justify-center my-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="border border-gray-300 rounded-full px-6 py-2 w-2/3 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
    )
  }
  