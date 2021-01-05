import ContentProvider from '../../shared/contentProvider'

export default class SportContentProvider extends ContentProvider {
  constructor(api, view) {
    super(api, view)
  }

  getTitle() {
    return 'Sport'
  }

  getHeaderText() {
    return 'Sport'
  }

  async getContent() {
    // to simulate long running operation
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))
    await delay(2000)
    const data = {} // data fetch from api

    return this.view.render(data)
  }
}
