export const getArticles = () => {
  return fetch("https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=UhCFZqdQZlcy8JSo0L5jPfMVW6kjxHM7")
    .then(resp => checkResponse(resp))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error("Something went wrong. Refresh and try again.")
    } else {
        return response.json()
    }
};