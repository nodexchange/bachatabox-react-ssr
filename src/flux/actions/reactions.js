import debug from 'debug';

class ReactionsActions {
  heart = postSlug =>
    (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          await alt.request({
            url: '/love',
            method: 'post',
            data: {slug: postSlug},
          });
        } catch (error) {
          debug('flux')('reactions heart error');
        }
        alt.getActions('requests').stop()
      })

  like = postSlug =>
    (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          await alt.request({
            url: '/likes',
            method: 'post',
            data: {slug: postSlug},
          });
        } catch (error) {
          debug('flux')('reactions heart error');
        }
        alt.getActions('requests').stop()
      })

  dislike = postSlug =>
    (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          await alt.request({
            url: '/dislikes',
            method: 'post',
            data: {slug: postSlug},
          });
        } catch (error) {
          debug('flux')('reactions heart error');
        }
        alt.getActions('requests').stop()
      })
}

export default ReactionsActions;
