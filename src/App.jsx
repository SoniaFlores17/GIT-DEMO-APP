import { useState } from "react"
import Categories from "./componets/Categories"
import GifsExpo from "./GifsExpo"

function App() {
  const [categories, setCategories] = useState(["Robotech", "Naruto"])

  return (
    <div className="m-5">
      <h3>Gif Demo App</h3>
      <hr />
      <Categories
        categories={categories}
        setCategories={setCategories}
      />
      <hr />
      <GifsExpo
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  )
}

export default App