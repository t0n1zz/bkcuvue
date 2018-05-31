var api_url = '';

switch( process.env.NODE_ENV){
  case 'development':
    api_url = 'https://bkcuvue.test/api/v1';
  break;
  case 'production': 
    api_url = 'https://puskopditbkcukalimantan.org/admins/api/v1';
  break;   
}

export const BKCU_CONFIG = {
  API_URL: api_url,
}