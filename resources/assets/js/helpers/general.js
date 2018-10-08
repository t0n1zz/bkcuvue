export function initialize(store, router) {
  router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const currentUser = store.state.auth.currentUser;
  
      if(requiresAuth && !currentUser) {
          next('/login');
      } else if(to.path == '/login' && currentUser) {
          next('/');
      } else {
          next();
      }
  });
  
  axios.interceptors.response.use(null, (error) => {
      if (error.response.status == 401) {
          store.dispatch('auth/logout');
          router.push('/login');
      }

      return Promise.reject(error);
  });

  if (store.state.auth.currentUser) {
      setAuthorization(store.state.auth.currentUser.token);
  }
}

export function setAuthorization(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

