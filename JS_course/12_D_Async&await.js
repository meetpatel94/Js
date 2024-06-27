// function main() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("hiii");
//             resolve(200);
//         }, 3000);
//     });
// }
// async function getd() {
//     await main();
// }
//===========================>>Example<<=====================================//
function main(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA");
            resolve(200);
        }, 3000);
    });
}
async function datas() {
    console.log("get data 1....")
    await main(1);
    console.log("get data 2....")
    await main(2);
    console.log("get data 3....")
    await main(3);
}
//=========================Advance Concept===========================================//
//***************IIFE*********************//
//***Immediately Invoked Function Expression*******//
// (async function () {
//     console.log("get data 1....")                  //It is only one time used
//     await main(1);
//     console.log("get data 2....")
//     await main(2);
//     console.log("get data 3....")
//     await main(3);
// })();

