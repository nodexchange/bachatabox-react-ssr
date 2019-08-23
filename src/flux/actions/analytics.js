import debug from 'debug';

class AnalyticsActions {

  constructor() {
    this.generateActions(
      'event',
    )
  }

  track = (event, id) =>
    (dispatch, alt) =>
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          await alt.request({ url: `/events/${event}/${id}` });
          debug('dev')('TRACK DISPATCHED >>> ' + event + ' :: ID > ' + id);
        } catch (error) {
          debug('dev')('[ERROR] TRACK >>> ' + error);
          // this.findFail({ error })
        }
        alt.getActions('requests').stop()
      })
}

export default AnalyticsActions;
