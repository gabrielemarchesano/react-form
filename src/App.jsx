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
        <div className="card p-3">
          <form>
            <div class="mb-3">
              <label for="articles" class="form-label">Nuovo articolo</label>
              <input
                type="text"
                class="form-control"
                name="articles"
                id="articles"
                aria-describedby="helpId"
                placeholder="Inserisci il titolo del nuovo articolo"
              />
              <button type="submit" className="btn btn-success my-2">Aggiungi</button>
            </div>
            
          </form>
            <ul className="list-group">
              {articles.map((article) => (
                <li className="list-group-item">{article.title}</li>
            ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
