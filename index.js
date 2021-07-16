function connect(clientId, key, successRedircetURI, failureRedirectURI){
  
        window.open('http://localhost:4203/signin/:'+clientId+'&successRedircetURI='+successRedircetURI+'&failureRedirectURI='+failureRedirectURI+'&key='+key,"indhi","width=400, height=400");
      
        return {   
            clientId, key, successRedircetURI, failureRedirectURI
        }
        
    }

module.exports.connect = connect;