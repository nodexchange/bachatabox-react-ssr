class ErrorActions {

  constructor() {
    this.generateActions(
      'indexSuccess', 'indexFail',
      'deleteSuccess', 'deleteFail',
    )
  }

  index() {
    // You need to return a fn in actions
    // to get alt instance as second parameter to access
    // `alt-resolver` and the ApiClient
    return (dispatch, alt) =>
      // We use `alt-resolver` from the boilerplate
      // to indicate the server we need to resolve
      // this data before server side rendering
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          const response = await alt.request({ url: '/error' });
          this.indexSuccess(response);
        } catch (error) {
          this.indexFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }
  log = (location, message) =>
    (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          await alt.request({
            url: '/error',
            method: 'post',
            data: {
              path: location,
              text: message,
            },
          });
        } catch (error) {
          // console.log('[Error] COULDNT SENT');
        }
        alt.getActions('requests').stop()
      })

  delete(id, key) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        const deleteData = {};
        deleteData.key = key;
        try {
          alt.getActions('requests').start();
          const response = await alt.request({
            url: '/error/' + id,
            method: 'delete',
            data: deleteData.key,
          });
          this.deleteSuccess(response);
        } catch (error) {
          this.deleteFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }
}

export default ErrorActions;
