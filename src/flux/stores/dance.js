class DanceStore {

  constructor() {
    this.bindActions(this.alt.getActions('dance'));

    this.dance = [];
    this.error = null;
  }

  onDanceSuccess(dance: Object[]) {
    this.dance = dance;
    this.error = null;
  }

  onDanceFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onShowSuccess(dance) {
    this.dance = dance;
  }

  onShowFail({ error }: { error: ?Object }) {
    this.error = error;
  }
}

export default DanceStore
