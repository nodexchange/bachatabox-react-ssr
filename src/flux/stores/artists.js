class ArtistsStore {

  constructor() {
    this.bindActions(this.alt.getActions('artists'));

    this.artists = [];
    this.error = null;
  }

  onArtistsSuccess(artists: Object[]) {
    this.artists = artists;
    this.error = null;
  }

  onArtistsFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onShowSuccess(artists) {
    this.artists = artists;
  }

  onShowFail({ error }: { error: ?Object }) {
    this.error = error;
  }
}

export default ArtistsStore
