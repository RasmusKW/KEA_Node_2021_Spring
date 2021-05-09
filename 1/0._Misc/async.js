//Why we need async code
//when we need it

//Promises
//two states
//pending
//fulfilled
//resolved rejected
/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything went well.");
        //reject("denied");
    }, 2000);
}).then(message => {
    console.log(message);
}).catch(errorMessage => {
    console.log(errorMessage);
});
*/
function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
            resolve("Happy days are starting");
            }, 2000);
        }
        catch{
        reject("Every Promise doesn't work out this way");
        }

    });
    
}
/*
myPromiseFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    */
   (async function start(){
    let message = await myPromiseFunction();
    console.log(message);
    
   })()