import NProgress from 'nprogress';
const progressShowDelay = 100;
let routeResolved = false;
/**
 * Initializes NProgress after a specified delay only if the route was not resolved yet.
 */

export function cancelTopProgress() {
  routeResolved = true;
  NProgress.done();
}
function tryInitProgress() {
  routeResolved = false;
  setTimeout(()=> {
    if (!routeResolved) {
      NProgress.start();
    }
  }, progressShowDelay);
}
export function initProgress(router) {
  router.afterEach(cancelTopProgress);
  router.beforeEach((to, from, next) => {
    tryInitProgress();
    return next();
  });
}
