function App() {

  const articles = [
    {
      id: 1,
      title: "Calcio"
    },
    {
      id: 2,
      title: "Cronaca nera"
    },
    {
      id: 3,
      title: "Politica"
    },
    {
      id: 4,
      title: "Tecnologia"
    },
    {
      id: 5,
      title: "Salute"
    }
  ]

  return (
    <>
      <div className="container">
        <h1 className="text-center py-4">React Blog Form</h1>
        <ul className="list-group">
          {articles.map((article) => (
            <li className="list-group-item">{article.title}</li>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App
