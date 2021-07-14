// function indhiThirdParty(clientId, redirectURI, key){
//     window.open(redirectURI+clientId,"myWindow","width=500, height=500");

//     var promise = new Promise(function(resolve, reject){
//         if (key){
//             resolve('success');
//         }
//         else{
//             reject('failure');
//         }
//     })

//     promise.then((message)=>{
//         //sending auth code 
//         key = this.key
//         console.log(message);
//     }).
//     catch((message)=>{
       
//         //send failure msg
//         console.log("failure")
//     })
// }


function indhiThirdParty(clientId, redirectURI, key){
    window.open("http://localhost:4203/signin/:"+clientId,"myWindow","width=800, height=800");

    var promise = new Promise(function(resolve, reject){
        if (key.length === 40){
                    console.log(key.length)
                    const alphanumeric = /^[a-z0-9]+$/i;
                    var valid = (alphanumeric.test(key));
                    console.log(valid);
                    resolve(key);
        }
        else{
            reject('failure - inavalid key');
        }
    })

    promise.then((key)=>{
        //sending auth code 
        console.log(key);
        return key;
    }).
    catch((message)=>{
       
        //send failure msg
        return message;
        console.log("failure")
    })
}


module.exports.indhiThirdParty = indhiThirdParty;