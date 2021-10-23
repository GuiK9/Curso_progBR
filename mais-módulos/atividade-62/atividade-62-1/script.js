


const betterDeveloper = 'Vanessa'

function whoIsBetterCallback(callback, errorCalback) {

    return new Promise((resolve, reject) => {

        if(betterDeveloper != 'Vanessa' && betterDeveloper != 'Gabriel'){
            reject({
                name: 'this is wrong',
                message: betterDeveloper + '? Really'
            })
        }else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'
            })
        }
})
}

whoIsBetterCallback().then((result) => {  console.log(result.name + '? yeah!' + result.message) }).catch((error) => { console.log(error.name + ' ' + error.message)})


















/*const betterDeveloper = 'Vanessa'

function whoIsBetterCallback(callback, errorCalback) {
    if(betterDeveloper != 'Vanessa' && betterDeveloper != 'Gabriel'){
        errorCalback({
            name: 'this is wrong',
            message: betterDeveloper + '? Really'
        })
    }else {
        callback({
            name: betterDeveloper,
            message: 'CDFs are the best!'
        })
    }
}

whoIsBetterCallback((result) => {
    console.log(result.name + '? yeah!' + result.message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})*/