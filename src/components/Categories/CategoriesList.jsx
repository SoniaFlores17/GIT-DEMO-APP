const CategoriesList = ({categories = []}) => {
    return (
      <div>
          <ol>
              {
              categories.map((category) => (
              <li key={category}>
                  {category}
              </li>
              ))
              }
          </ol>
      </div>
    )
  }
  
  export default CategoriesList