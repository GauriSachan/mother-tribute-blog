import { useState } from 'react'
import articles from '../../../../data/articles.json'

export default function HeroCarousel() {
  const featured = articles.slice(0, 3)
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + featured.length) % featured.length)
  const next = () => setIndex((index + 1) % featured.length)

  return (
    <div className="relative w-full overflow-hidden bg-pink-100 p-6 rounded-xl mb-10">
      <img
        src={featured[index].image}
        alt={featured[index].title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <button onClick={prev} className="bg-white px-3 py-1 rounded-full shadow">←</button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <button onClick={next} className="bg-white px-3 py-1 rounded-full shadow">→</button>
      </div>
    </div>
  )
}
