/* eslint max-len:1 */

type State = {
  title: ?string,
  titleBase: ?string,
  description: ?string,
  statusCode: ?number
};

class HelmetStore {

  constructor() {
    this.bindActions(this.alt.getActions('helmet'))

    this.state = {
      title: '',
      titleBase: 'BachataBox | ',
      description:
        'The web\'s largest library of premium bachata videos.' +
        'Only the finest daily bachata videos, artists and music',
      statusCode: 200,
    }
  }

  onUpdate(props: State) {
    this.setState({ ...this.state, ...props })
  }
}

export default HelmetStore
