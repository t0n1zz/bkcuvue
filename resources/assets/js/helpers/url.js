var api_url = '';

switch( process.env.NODE_ENV){
  case 'development':
    api_url = 'https://bkcuvue.test/api/';
  break;
  case 'production': 
    api_url = 'https://puskopcuina.org/api/';
  break;   
}

export const url_config = {
  api_url: api_url,
}