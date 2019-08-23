import debug from 'debug';

const { BROWSER } = process.env;

class SessionStore {

  constructor() {
    this.bindActions(this.alt.getActions('session'));
    this.session = null;
  }

  onUpdate({ username, key }) {
    this.session = { username, key };
  }

  onLoginSuccess({ username, key }) {
    this.session = { username, key };
    // transition app to `/account`
    // or to the original asked page
    /* istanbul ignore if */
    if (BROWSER) {
      // const { browserHistory } = require('react-router');
      const [, nextPath = '/admin/notifications/'] = window
        .location.search.match(/\?redirect=(.+)$/) || [];

      const Cookies = require('cookies-js');
      Cookies.set('_auth', username);
      Cookies.set('_key', key);
      debug('dev')('redirect after login to %s', nextPath);
      if (unescape(nextPath) === 'admin/') {
        window.location.href = '/' + unescape(nextPath);
        return;
      }
      window.location.href = nextPath;
    }
  }

  onLoginFail = () => {
    debug('dev')('LOGIN FAILED');
    if (BROWSER) {
      const { browserHistory } = require('react-router');
      browserHistory.replace('/login/');
    }
  }

  onLogout() {
    this.session = null;

    /* istanbul ignore if */
    if (BROWSER) {
      const Cookies = require('cookies-js');
      const { browserHistory } = require('react-router');
      Cookies.expire('_auth');
      Cookies.expire('_key');
      browserHistory.replace('/login/');
    }
  }

}

export default SessionStore;
