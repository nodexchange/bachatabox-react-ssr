class PlaylistsStore {

  constructor() {
    this.bindActions(this.alt.getActions('playlists'));

    this.playlistsCollection = [];
    this.error = null;
  }

  onIndexSuccess(items: Object[]) {
    this.playlistsCollection = items;
    this.error = null;
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onNewSuccess() {
    this.playlistsCollection = [{ success: true }];
    this.error = null;
  }

  onNewFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onUpdateSuccess() {
    this.playlistsCollection = [{ success: true }];
    this.error = null;
  }

  onUpdateFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onDeleteSuccess() {
    this.playlistsCollection = [{ success: true }];
    this.error = null;
  }

  onDeleteFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onFindSuccess(items: Object[]) {
    this.playlistsCollection = items;
    this.error = null;
  }

  onFindFail({ error }: { error: ?Object }) {
    this.error = error;
  }

}

export default PlaylistsStore;
