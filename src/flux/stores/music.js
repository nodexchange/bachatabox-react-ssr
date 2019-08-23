class MusicStore {

  constructor() {
    this.bindActions(this.alt.getActions('music'));

    this.music = [];
    this.error = null;
  }

  onMusicSuccess(music: Object[]) {
    this.music = music;
    this.error = null;
  }

  onMusicFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onShowSuccess(music) {
    this.music = music;
  }

  onShowFail({ error }: { error: ?Object }) {
    this.error = error;
  }
}

export default MusicStore
