var delay = function (ms, instance, method, args) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Object.keys(instance).indexOf(method) > -1){
                resolve(instance[method].apply(instance, args));
            }else {
                reject();
            }
        }, ms);
    });
}

module.exports = delay;