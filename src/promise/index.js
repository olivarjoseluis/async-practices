const promise = new Promise()

const cows = 8;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`There are ${cows} in our farm.`);
    } else {
        reject(`There aren't enough cown in our farm.`)
    }
});

countCows.then((result) => { console.log(result); }).catch((error) => { console.log(error); })

function delay(time, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

delay(2000, "Hello after 2s")
    .then((message) => console.log(message))