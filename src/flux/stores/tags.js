class TagsStore {

  constructor() {
    this.bindActions(this.alt.getActions('tags'));

    this.tagsCollection = [];
    this.error = null;
  }

  onIndexSuccess(items: Object[]) {
    this.tagsCollection = items;
    this.error = null;
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onNewSuccess() {
    this.tagsCollection = [{ success: true }];
    this.error = null;
  }

  onNewFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onUpdateSuccess() {
    this.tagsCollection = [{ success: true }];
    this.error = null;
  }

  onUpdateFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onDeleteSuccess() {
    this.tagsCollection = [{ success: true }];
    this.error = null;
  }

  onDeleteFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onFindSuccess(items: Object[]) {
    this.tagsCollection = items;
    this.error = null;
  }

  onFindFail({ error }: { error: ?Object }) {
    this.error = error;
  }

}

export default TagsStore;
