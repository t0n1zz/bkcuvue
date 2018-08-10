class Auth {
  constructor() {
    this.token = window.localStorage.getItem('token');

    if (this.token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
    }
  }

  login (token, user) {        
    window.localStorage.setItem('token', token);

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    this.token = token;
  }
  
  check () {
    return !! this.token;
  }

  logout () {        
    window.localStorage.setItem('token', '');

    axios.defaults.headers.common['Authorization'] = '';

    this.token = '';
  }
}

export default Auth;