import articles from '../../data/articles.json'

export async function getStaticPaths() {
  const paths = articles.map(article => ({ params: { id: article.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.id === params.id)
  return { props: { article } }
}

export default function ArticlePage({ article }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={article.image} className="w-full h-72 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
      <p className="text-gray-500">{article.author} • {article.date} • {article.readingTime} min</p>
      <p className="mt-4 whitespace-pre-line">{article.content}</p>
    </div>
  )
}
