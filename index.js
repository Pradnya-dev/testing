function indhiThirdParty(clientId, redirectURI, key){
    window.open("http://localhost:4203/signin/:"+clientId,"myWindow","width=800, height=800");

    var promise = new Promise(function(resolve, reject){
        if (key === 'some input'){
            resolve('success');
        }
        else{
            reject('failure');
        }
    })

    promise.then((message)=>{
        //sending auth code 
        console.log(message);
    }).
    catch((message)=>{
       
        //send failure msg
        console.log("failure")
    })
}

module.exports.indhiThirdParty = indhiThirdParty;