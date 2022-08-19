function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing information');
        resolve(`Extra Information + ${response}`)
    })
}

// Handling promises using then and catch

// makeRequest('Google')
//     .then(response => {
//         console.log('Response received')
//         return processRequest(response)
//     })
//     .then(processedResponse => {
//         console.log(processedResponse);
//     })
//     .catch(error => {
//         console.log(`Error: ${error}`)
//     })

async function doWork(location) {
    try {
        const response = await makeRequest(location)
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

doWork('Google');