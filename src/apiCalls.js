
export const getArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(resp => checkResponse(resp))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error("Something went wrong. Refresh and try again.")
    } else {
        return response.json()
    }
};