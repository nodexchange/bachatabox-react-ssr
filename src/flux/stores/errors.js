class ErrorsStore {

  constructor() {
    this.bindActions(this.alt.getActions('errors'));

    this.errors = [];
    this.error = null;
  }

  onIndexSuccess(items: Object[]) {
    this.errors = items;
    this.error = null;
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error;
  }

  onDeleteSuccess() {
    this.errors = [{ success: true }];
    this.error = null;
  }

  onDeleteFail({ error }: { error: ?Object }) {
    this.error = error;
  }
}

export default ErrorsStore;
