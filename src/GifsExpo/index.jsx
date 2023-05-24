import { useState } from "react"

const GifsExpo = ({categories = []}) => {

  const [urlList, setUrlList] = useState([])

    const getGifs = async (categories) => {

      const responsesList = await Promise.all(categories.map(async (category) =>{
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=C4kTA04UeVeljjVeBkLGaOTYrGYuKyFE&q=${category}&limit=10`
        )
        const apiResponse = await response.json()
        return apiResponse.data
      }))

      let gifsList = []

      responsesList.forEach((data) => {
        data.forEach((item) => {
          gifsList = [...gifsList, item.images.fixed_width.url]
        })
      })

      setUrlList([...gifsList])
    }
    getGifs(categories)

  return (
    <div>
      <h4>GifsExpo</h4>
      <ol>
        {
          urlList.map((url) => {
            return (
              <li key={url}>{url}</li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default GifsExpo