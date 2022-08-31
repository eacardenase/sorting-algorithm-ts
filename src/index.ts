const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

(async () => {
    const text = await promise;
    console.log(text);
})();

const logSomething = () => {
    console.log('something...');
};

logSomething();
