// .then() & .catch()
// 
// promise.then((res) => {......})     //use for fullfilled
// promise.catch((err) => {......})    //use for reject
//
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("hiii");
        // resolve("success");
        reject("failed");
    });
};

let promise = getPromise();
//
promise.then((res) => {
    console.log("promise fullfilled", res);
});
//
promise.catch((err) => {
    console.log("Rejected", err);
});
