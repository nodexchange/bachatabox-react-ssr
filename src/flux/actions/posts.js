import debug from 'debug';

class PostsActions {

  constructor() {
    this.generateActions(
      'indexSuccess', 'indexFail',
      'findSuccess', 'findFail',
      'newSuccess', 'newFail',
      'findRelatedSuccess', 'findRelatedFail',
      'tagPostsSuccess', 'tagPostsFail',
      'updateSuccess', 'updateFail',
      'deleteSuccess', 'deleteFail',
    )
  }

  index(published) {
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
          let response = {};
          if (published) {
            response = await alt.request({ url: '/posts/' });
          } else {
            // FETCH ALL
            response = await alt.request({ url: '/debug/index' });
          }

          this.indexSuccess(response);
        } catch (error) {
          this.indexFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  indexWithLimit(limit) {
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
          const response = await alt.request({ url: `/posts/limit/${limit}` });
          this.indexSuccess(response);
        } catch (error) {
          this.indexFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  tagIndex(name) {
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
          const response = await alt.request({ url: `/posts/bytagname/${name}`});
          this.tagPostsSuccess(response);
        } catch (error) {
          this.tagPostsFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  findRelatedByTags(tagid) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/posts/tags/${tagid}` })
          this.findRelatedSuccess(response)
        } catch (error) {
          debug('mongoose')('ERROR >>>> ' + error);
          this.findRelatedFail({ error })
        }
        alt.getActions('requests').stop()
      });
  }

  findPost(id) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start()
          const response = await alt.request({ url: `/post/${id}` })
          this.findSuccess(response)
        } catch (error) {
          this.findFail({ error })
        }
        alt.getActions('requests').stop()
      });
  }

  searchForPostBySlug(slug) {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          const response = await alt.request({ url: `/post/notfound/${slug}` })
          this.findSuccess(response);
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
            url: '/posts',
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
            url: '/posts/' + formData._id,
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
    const keyId = key;
    return (dispatch, alt) =>
      alt.resolve(async () => {
        const deleteData = {};
        deleteData.key = keyId;
        try {
          alt.getActions('requests').start();
          const response = await alt.request({
            url: '/posts/' + id,
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

export default PostsActions;
