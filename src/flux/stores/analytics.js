/* eslint max-len:1 */

type State = {
  eventCategory: ?string,
  eventAction: ?string,
  eventLabel: ?string,
  eventValue: ?number
};

/*
  eventCategory text required:yes Typically the object that was interacted with (e.g. 'Video')
  eventAction text required:yes The type of interaction (e.g. 'play')
  eventLabel text required:no Useful for categorizing events (e.g. 'Fall Campaign')
  eventValue integer required:no A numeric value associated with the event (e.g. 42);

  ga('send', 'event',
    'Videos', 'play', 'Fall Campaign');
*/

class AnalyticsStore {

  constructor() {
    this.bindActions(this.alt.getActions('analytics'));

    this.state = {
      categoryProp: '',
      actionProp: '',
      labelProp: '',
      valueProp: 0,
    }
  }

  onEvent(props: State) {
    this.setState({ ...this.state, ...props })
  }
}

export default AnalyticsStore
