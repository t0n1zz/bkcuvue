import { refreshToken } from "./auth.js";
import Token from "./token";
import { getLocalUser } from "./auth";

export function initialize(store, router) {
    
  router.beforeEach((to, from, next) => {
		window.scrollTo(0, 0);
		document.body.classList.remove("modal-open");
		
		const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
		const currentUser = store.state.auth.currentUser;

		if(requiresAuth && !currentUser) {
			return next({
				path:'/login',
				query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
			});
		} 
		
		if(to.path == '/login' && currentUser) {
				return next('/');
		} 
		next();
	});
  
  axios.interceptors.response.use(response => {
		if(store.state.auth.isLoggedIn){
			const currentTime = new Date().getTime() / 1000;
			const user = getLocalUser();
			const token = Token.payload(user.token);

			// console.log(currentTime, token.exp);

			if(currentTime > token.exp - 600 && !store.state.auth.isLoading){
				store.dispatch('auth/login');

				refreshToken()
				.then((res) => {
					if(Token.isValid(res.access_token)){
						store.dispatch('auth/loginSuccess', res);

						return response;
					}else{
						store.dispatch('auth/loginFailed');
						store.dispatch('auth/logout');

						router.push({
							path:'/login',
							query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
						});

						return Promise.reject(error);
					}
				})
				.catch((error) => {
					store.dispatch('auth/loginFailed');
					store.dispatch('auth/logout');

					router.push({
						path:'/login',
						query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
					});
					
					return Promise.reject(error);
				});
			}else{
				return response;
			}
		}else{
			return response;
		}  
  }, error => {
		if (error.response.status == 401) {
			store.dispatch('auth/logout');

			router.push({
				path:'/login',
				query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
			});
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

