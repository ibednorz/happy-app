import API from '../../utils/api'

export default class NewsAPI extends API {
  constructor(baseUrl, apiKey) {
    super(baseUrl, apiKey)

    this.topHeadlinesUrl = `${baseUrl}top-headlines`
    this.language = 'en'

    this.defaultHeaders = {
      'X-Api-Key': apiKey,
    }
  }

  fetch(pageNumber, country) {
    let options = {
      headers: this.defaultHeaders,
    }

    let query = `?language=${this.language}&page=${pageNumber}`

    if (country) {
      query += `&country=${country.isoCode}`
    }

    return super.fetch(this.topHeadlinesUrl, options, query)
  }
}
