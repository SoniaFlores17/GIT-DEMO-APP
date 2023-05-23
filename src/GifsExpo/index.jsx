const GifsExpo = ({ categories = [] }) => {

    const getGifs = (categories) => {
        let gifsList = []
        categories.forEach(async (category) => {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=bFecPHiAkTVow7t545asASYOLFLTEADs&q=${category}&limit=10`
            )
            const apiResponse = await response.json()
            //console.log(apiResponse.data[0].images.fixed_width.url)
            gifsList = apiResponse.data.map((gif) =>{
                return gif.images.fixed_width.url
            })
        })
        console.log(gifsList)
    }
    
    getGifs(categories)

    return (
        <h4>GitExpo</h4>
    )
}

export default GifsExpo