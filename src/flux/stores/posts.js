class PostsStore {

  constructor() {
    this.bindActions(this.alt.getActions('posts'));

    this.collection = [];
    this.related = [];
    this.error = null;
  }

  onIndexSuccess(items: Object[]) {
    this.collection = items;
    this.error = null;
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onTagPostsSuccess(items: Object[]) {
    this.tagPosts = items;
  }

  onTagPostsFail({ error }: { error:?Object }) {
    this.error = error;
  }

  onSaveSuccess() {
    this.collection = { saved: true };
    this.error = null;
  }

  onSaveFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onNewSuccess() {
    this.collection = [{ success: true }];
    this.error = null;
  }

  onNewFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onUpdateSuccess() {
    this.collection = [{ success: true }];
    this.error = null;
  }

  onUpdateFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onDeleteSuccess() {
    this.collection = [{ success: true }];
    this.error = null;
  }

  onDeleteFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onFindSuccess(items: Object[]) {
    this.collection = items;
    this.error = null;
  }

  onFindFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onFindRelatedSuccess(items: Object[]) {
    this.related = items;
    this.error = null
  }

  onFindRelatedFail({ error }: { error: ?Object }) {
    this.error = error;
  }

}

export default PostsStore;
