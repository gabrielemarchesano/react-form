import { useState } from "react"

function App() {

  const initialArticles = [
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

  const [articles, setArticles] = useState(initialArticles);
  /* console.log(article);
  console.log(setArticle); */
  const [newTitle, setNewTitle] = useState("");

  function handleNewArticle(event) {
    setNewTitle(event.target.value)
  }


  function handleSubmit(event) {
    event.preventDefault();
    /* console.log(newTitle); */
    if (newTitle.length > 3) {
      const newArticles = [
        ...articles,
        {
          id: articles.length + 1,
          title: newTitle
        }
      ];
      setArticles(newArticles);
      setNewTitle("");
    }
  }

  function handleRemoveTitle(id){
    console.log(id)
    const filteredTitle = articles.filter((article) => article.id != id)
    console.log(filteredTitle);
    setArticles(filteredTitle);
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center py-4">React Blog Form</h1>
        <div className="card p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nuovo articolo</label>
              <input
                type="text"
                className="form-control"
                name="articles"
                id="articles"
                placeholder="Inserisci il titolo del nuovo articolo"
                value={newTitle}
                onChange={handleNewArticle}
              />
              <button type="submit" className="btn btn-success my-2">Aggiungi</button>
            </div>

          </form>
          <ul className="list-group">
            {
              articles.map(article => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={article.id}>
                  {article.title}
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTitle(article.id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
