class Api {
  constructor () {}

  call (requestType, url, data = null) {
    return new Promise((resolve, reject) => {
        axios[requestType](url, data)
          .then(response => {
						resolve(response);
          })
          .catch(({response}) => {
						reject(response);
          });
    });
  }
}

export default Api;