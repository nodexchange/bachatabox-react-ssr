import debug from 'debug';

class NotificationsActions {

  constructor() {
    this.generateActions(
      'indexSuccess', 'indexFail',
    )
  }

  index() {
    return (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          const response = await alt.request({ url: '/notifications' });
          this.indexSuccess(response);
        } catch (error) {
          this.indexFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

  adminLogin = () =>
    (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          await alt.request({ url: '/notifications/adminLogin' });
        } catch (error) {
          debug.log('mongoose')('>>> ERROR >>')
        }
        alt.getActions('requests').stop();
      });
}

export default NotificationsActions;
