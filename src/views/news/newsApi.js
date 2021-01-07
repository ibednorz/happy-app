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

  fetch() {
    let options = {
      headers: this.defaultHeaders,
    }

    let query = `?language=${this.language}`
    console.log(this.topHeadlinesUrl, options, query)
    return super.fetch(this.topHeadlinesUrl, options, query)
  }
}