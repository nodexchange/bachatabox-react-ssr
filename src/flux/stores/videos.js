class VideosStore {

  constructor() {
    this.bindActions(this.alt.getActions('videos'));

    this.videos = [];
    this.error = null;
  }

  onVideosSuccess(videos: Object[]) {
    this.videos = videos;
    this.error = null;
  }

  onVideosFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onShowSuccess(video) {
    this.videos = video;
  }

  onShowFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onFindSuccess(video) {
    this.videos = video;
  }

  onFindFail({ error }: { error: ?Object }) {
    this.error = error;
  }
}

export default VideosStore
