class BannersStore {

  constructor() {
    this.bindActions(this.alt.getActions('banners'));

    this.banners = [];
    this.error = null;
  }

  onIndexSuccess(items: Object[]) {
    this.banners = items;
    this.error = null;
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onNewSuccess() {
    this.banners = [{ success: true }];
    this.error = null;
  }

  onNewFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onUpdateSuccess() {
    this.banners = [{ success: true }];
    this.error = null;
  }

  onUpdateFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onDeleteSuccess() {
    this.banners = [{ success: true }];
    this.error = null;
  }

  onDeleteFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onFindSuccess(items: Object[]) {
    this.banners = items;
    this.error = null;
  }

  onFindFail({ error }: { error: ?Object }) {
    this.error = error;
  }

}

export default BannersStore;
