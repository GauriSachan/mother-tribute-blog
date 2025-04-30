import Link from 'next/link'

export default function ArticleCard({ article }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <img src={article.image} className="w-full h-40 object-cover rounded" alt={article.title} />
      <div className="mt-2">
        <span className="text-sm text-gray-500">{article.category}</span>
        <h2 className="font-semibold text-lg">{article.title}</h2>
        <p className="text-sm text-gray-700">{article.excerpt}</p>
        <p className="text-xs text-gray-400">Reading Time: {article.readingTime} min</p>
        <Link href={`/articles/${article.id}`}>
          <button className="mt-2 bg-pink-500 text-white px-3 py-1 rounded">Read More</button>
        </Link>
      </div>
    </div>
  )
}
