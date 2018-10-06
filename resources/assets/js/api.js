class Api {
  constructor () {}

  call (requestType, url, data = null) {
    return new Promise((resolve, reject) => {
        axios[requestType](url, data)
          .then(response => {
						resolve(response);
          })
          .catch(({response}) => {
            console.log(response.status);
						if (response.status == '401') {
								auth.logout();
								Vue.$router.push({ name: 'login' })
						}
						reject(response);
          });
    });
  }
}

export default Api;