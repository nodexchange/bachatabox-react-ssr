class NotificationsStore {

  constructor() {
    this.bindActions(this.alt.getActions('notifications'));

    this.notifications = [];
    this.error = null;
  }

  onIndexSuccess(items: Object[]) {
    this.notifications = items;
    this.error = null;
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error;
  }
}

export default NotificationsStore;
