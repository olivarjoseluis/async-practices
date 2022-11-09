const fnAsync = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => { resolve('Got') }, 2000) : reject(new Error('Error'));
    });
}

let value;

const anotherFn = async () => {
    const something = await fnAsync();
    value = something;
    console.log(value);
    console.log('Insider marker');
}

console.log(value, 'Before');
anotherFn();
console.log(value, 'After');