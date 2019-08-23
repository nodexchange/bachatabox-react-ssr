import debug from 'debug';
import React, { Component, PropTypes } from 'react';
import ReactGA from 'react-ga';

import Footer from './components/footer';
import Navigation from './components/navigation';
import NavigationAdmin from './components/navigation-admin';
import ErrorLogger from './components/error-logger';

/* GA */

/* istanbul ignore next */
if (process.env.BROWSER) {
  require('./styles/app.css');
  require('./styles/owl.carousel.min.css');
}
// require('./../server/sitemap.xml');

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  }
  static contextTypes = { flux: PropTypes.object.isRequired }

  state = { i18n: this.context
      .flux.getStore('locale').getState() }

  componentDidMount() {
    const { flux } = this.context;
    flux.getStore('helmet').listen(this.handleTitleChange);
    flux.getStore('analytics').listen(this.handleAnalyticsRequest);
    ReactGA.initialize('UA-82660214-1', {debug: true });
    this.logPageView();
  }

  componentDidUpdate() {
    this.logPageView();
  }

  componentWillUnmount() {
    const { flux } = this.context;
    flux.getStore('helmet').unlisten(this.handleTitleChange);
    flux.getStore('analytics').unlisten(this.handleAnalyticsRequest);
  }

  handleTitleChange = ({ titleBase, title, description }) => {
    document.title = titleBase + title;
    const allMetaElements = document.getElementsByTagName('meta');
    for (let i = 0; i < allMetaElements.length; i++) {
      if (allMetaElements[i].getAttribute('name') === 'description') {
        allMetaElements[i].setAttribute('content', description);
        break;
      }
    }
  }

  handleAnalyticsRequest = ({categoryProp, actionProp, labelProp, valueProp}) => {
    ReactGA.event({
      category: categoryProp,
      action: actionProp,
      label: labelProp,
      value: valueProp,
    });
  }

  logoutHandler = () => {
    debug('dev')('Logout requested');
    const { flux } = this.context;
    return flux.getActions('session').logout();
  }

  logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  selectNavigation() {
    let navigation = {};
    const path = this.props.location.pathname;
    if (path.indexOf('admin') === -1) {
      navigation = <Navigation path={path} />;
    } else {
      navigation = <NavigationAdmin logoutHandler={this.logoutHandler} />;
    }
    if (path.indexOf('login') !== -1) {
      navigation = <div className="placeholder-nav" />;
    }
    return navigation;
  }

  render() {
    const { children } = this.props;
    const navigation = this.selectNavigation();

    return (
      <div className="flud-container">
        {navigation}
        {children}
        {/* <Header /> */}
        <Footer />
        <ErrorLogger location={this.props.location} />
      </div>
    );
  }
}

export default App;
