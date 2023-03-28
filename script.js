// N1
let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // виводить 1, бо тут може бути один resolve і якшо хочем шось додати, то маємо писати then


// N2

function delay(ms) {
    return new Promise(function(resolve, reject) {
           setTimeout(function () {
                   resolve();
           },ms)
    })
}

delay(3000).then(() => alert('виконалось через 3 секунди'));

// N3

let getPromise = new Promise(function (resolve, reject) {
    resolve(9)
    setTimeout(resolve, 2000)
})

console.log(getPromise);

// N4
let arrNum = [1,2,5,6,3,89];
function getNum(arr){
    return new Promise(function(resolve, reject) {
        let biggestNum = Math.max(...arr);
        resolve(biggestNum)
    })
}

console.log(getNum(arrNum));
