module.exports = {
    logger,
    errorRef,
}

//Logger middleware
function logger(req, res, next) {
    console.log(`${req.method} to ${req.path} at ${new Date().toISOString()}`);
    next();
}

//error middle ware for console log
// const errorRef = error => {
//     const hash = Math.random()
//         .toString(36)
//         .substring(2);
//     console.log(hash, error);
//     return {
//         message: `******************************\n\nUnknown Error, Ref: ${hash}\n\n******************************`,
//         error
//     };
// }; 

function errorRef() {
    const hash = Math.random()
        .toString(36)
        .substring(2);
    console.log(hash, error);
    return {
        message: `******************************\n\nUnknown Error, Ref: ${hash}\n\n******************************`,
        error
    };
}; 