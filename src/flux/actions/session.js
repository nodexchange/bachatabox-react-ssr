class SessionActions {

  constructor() {
    this.generateActions('loginSuccess', 'loginFail', 'logout', 'update')
  }

  login(loginData) {
    return (dispatch, alt) =>
      // We use `alt-resolver` from the boilerplate
      // to indicate the server we need to resolve
      // this data before server side rendering
      alt.resolve(async () => {
        try {
          alt.getActions('requests').start();
          const response = await alt.request(
            {
              url: '/login',
              method: 'post',
              data: loginData,
            },
          );
          this.loginSuccess(response);
        } catch (error) {
          this.loginFail({ error });
        }
        alt.getActions('requests').stop();
      });
  }

}

export default SessionActions
