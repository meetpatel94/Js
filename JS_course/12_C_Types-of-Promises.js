let prom1 = new Promise((resolve, reject) => {
    console.log("prom1");
    setTimeout(() => {
        console.log("time1");
        resolve("Success1")
    }, 3000);
})
let prom2 = new Promise((resolve, reject) => {
    console.log("prom2");
    setTimeout(() => {
        console.log("time2");
        // resolve("Success2")
        reject("Unsuccess2")
    }, 2000);
})

//1.//-------------------------------------------->>all<<-----------------------------------------------------//
let m = Promise.all([prom1, prom2]);
m.then((res) => {
    console.log("full", res)
}).catch(err => {
    console.log("reject", err)
})
//2.//------------------------------------------->>any<<-----------------------------------------------------//
// let m = Promise.any([prom1, prom2]);
// m.then((res) => {
//     console.log("full", res)
// }).catch(err => {
//     console.log("reject", err)
// })
//3.//------------------------------------------>>race<<------------------------------------------------------//
// let m = Promise.race([prom1, prom2]);
// m.then((res) => {
//     console.log("full", res)
// }).catch(err => {
//     console.log("reject", err)
// })
//4.//--------------------------------------->>allSettled<<---------------------------------------------------//
// let m = Promise.allSettled([prom1, prom2]);
// m.then((res) => {
//     console.log("full", res)
// }).catch(err => {
//     console.log("reject", err)
// })
//5.//--------------------------------------->>resolve<<------------------------------------------------------//
// let m = Promise.resolve([prom1, prom2]);
// m.then((res) => {
//     console.log("full", res)
// }).catch(err => {
//     console.log("reject", err)
// })
//6.//-------------------------------------->>reject<<--------------------------------------------------------//
// let m = Promise.reject([prom1, prom2]);
// m.then((res) => {
//     console.log("full", res)
// }).catch(err => {
//     console.log("reject", err)
// })