class Token{

  isValid(token){
      const payload = this.payload(token);
      
      if(payload){
        switch( process.env.NODE_ENV){
					case 'development':
						return payload.iss == "https://bkcuvue.test/api/auth/login" || "https://bkcuvue.test/api/auth/refresh"  ? true : false
					break;
					case 'production': 
						return payload.iss == "https://puskopcuina.org/api/auth/login" || "https://puskopcuina.org/api/auth/refresh"  ? true : false
					break;   
        }        
      }

      return false
  }

  payload(token){
      const payload = token.split('.')[1]
      return this.decode(payload)
  }

  decode(payload){
      if(this.isBase64(payload)){
          return JSON.parse(atob(payload))
      }
      return false
  }

  isBase64(str){
      try{
          return btoa(atob(str)).replace(/=/g,"") == str
      }
      catch(err){
          return false
      }
  }
}

export default Token = new Token()