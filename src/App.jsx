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

  const [article, setArticle] = useState(initialArticles);
  console.log(article);
  console.log(setArticle);
  const [newArticle, setNewArticle] = useState("");

  function handleNewArticle(event){
    setNewArticle(event.target.value)
  }


  function handleSubmit(event){
    event.preventDefault();
    alert("Form inviato");
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
                value={newArticle}
                onChange={handleNewArticle}
              />
              <button type="submit" className="btn btn-success my-2">Aggiungi</button>
            </div>
            
          </form>
            <ul className="list-group">
              {
              article.map(article => (
                <li className="list-group-item" key={article.id}>{article.title}</li>
              ))
              }
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
