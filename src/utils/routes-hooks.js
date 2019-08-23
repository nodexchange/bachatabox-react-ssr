export function isConnected(flux) {
  return function connected({ location: { pathname } }, replace) {
    const { session } = flux.getStore('session').getState();
    if (!session) {
      // replace(null, `/login?redirect=${pathname}`);
      pathname = pathname.replace('/', '');
      replace({ pathname: '/login/', query: { redirect: pathname} })
    }
  };
}
