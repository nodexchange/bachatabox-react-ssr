class VideosActions {

  constructor() {
    this.generateActions(
      'videosSuccess', 'videosFail',
      'showSuccess', 'showFail',
      'findSuccess', 'findFail',
    )
  }

  index() {
    // You need to return a fn in actions
    // to get alt instance as second parameter to access
    // `alt-resolver` and the ApiClient
    return (dispatch, alt) =>
      // We use `alt-resolver` from the boilerplate
      // to indicate the server we need to resolve
      // this data before server side rendering
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: '/videos' })
          this.videosSuccess(response)
        } catch (error) {
          this.videosFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }

  show(slug) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/video/${slug}` })
          this.showSuccess(response)
        } catch (error) {
          this.showFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }

  findVideoById(videoid) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/video/id/${videoid}` })
          this.findSuccess(response)
        } catch (error) {
          this.findFail({ error })
        }
        alt.getActions('requests').stop()
      })
  }
}

export default VideosActions
