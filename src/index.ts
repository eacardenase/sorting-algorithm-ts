const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test');
    }, 1000);
});

async () => {
    const text = await promise;
    console.log(text);
};

const logSomething = () => {
    console.log('something...');
};
