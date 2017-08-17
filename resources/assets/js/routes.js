import dashview from './views/dashview.vue';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import artikelindex from './views/artikel/index.vue';

const routes = [
	{
		path: '/login',
		component: login
	},
	{
		path: '/',
		component: dashview,
		children:[
			{
				path: 'dashboard',
				alias: '',
				component: dashboard,
				name: 'dashboard',
				meta: {description: 'Overview'}
			},
			{
				path: 'artikel',
				alias: '',
				component: artikelindex,
				name: 'artikelindex',
				meta: {description: 'Artikel'}
			}
		]
	}
]

export default routes