import axios from 'axios'

const API_KEY = '839e0a5090msh62207967b70a5ebp1f42a2jsn980a5fb4ca7a'
const API_HOST = 'moviesdatabase.p.rapidapi.com'
const API_ENDPOINT = {
  random: 'https://moviesdatabase.p.rapidapi.com/titles',
  search: ({ keyword }) => `https://moviesdatabase.p.rapidapi.com/titles/search/title/${keyword}`
}

export async function searchMovies ({ keyword, page, sort, limit, startYear, endYear }) {
  try {
    const params = {
      pageValue: page ? `?page=${page}` : '',
      sortValue: `&sort=${sort}`,
      limitValue: limit ? `&limit=${limit}` : '',
      startYearValue: startYear ? `&startYear=${startYear}` : '',
      endYearValue: endYear ? `&endYear=${endYear}` : ''
    }

    const paramsString = Object.values(params).join('')
    const urlRequest = (keyword ? API_ENDPOINT.search({ keyword }) : API_ENDPOINT.random) + paramsString

    const options = {
      method: 'GET',
      url: urlRequest,
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      }
    }

    const res = await axios(options)
    const data = await res.data

    const results = data.results

    const hasNext = Boolean(data.next)

    const moviesFound = results?.map((result) => ({
      id: result.id,
      title: result.titleText?.text,
      img: result.primaryImage?.url,
      caption: result.primaryImage?.caption.plainText,
      type: result.titleType?.isSeries ? 'Serie' : 'Película',
      year: result.releaseDate?.year ?? '----'
    }))

    return { hasNext, moviesFound }
  } catch (error) {
    throw new Error('Error en la busqueda => ' + error)
  }
}
