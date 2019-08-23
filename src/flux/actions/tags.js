class TagsActions {

  constructor() {
    this.generateActions(
      'indexSuccess', 'indexFail',
      'findSuccess', 'findFail',
      'newSuccess', 'newFail',
      'updateSuccess', 'updateFail',
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
          const response = await alt.request({ url: '/tags' });
          this.indexSuccess(response);
        } catch (error) {
          this.indexFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  findPost(id) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/tags/${id}` })
          this.findSuccess(response)
        } catch (error) {
          this.findFail({ error })
        }
        alt.getActions('requests').stop()
      });
  }

  new(formData, key) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        formData.key = key;
        try {
          alt.getActions('requests').start();
          const response = await alt.request({
            url: '/tags',
            method: 'post',
            data: formData,
          });
          this.newSuccess(response);
        } catch (error) {
          this.newFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  update(formData, key) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        formData.key = key;
        try {
          alt.getActions('requests').start();
          const response = await alt.request({
            url: '/tags/' + formData._id,
            method: 'put',
            data: formData,
          });
          this.updateSuccess(response);
        } catch (error) {
          this.updateFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  delete(id, key) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        const deleteData = {};
        deleteData.key = key;
        try {
          alt.getActions('requests').start();
          const response = await alt.request({
            url: '/tags/' + id,
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

export default TagsActions;
