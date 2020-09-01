let ditepati = true;

const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('jani telah ditepati');
    } else {
        reject('ingkar janji');
    }

})

janji1.then(response => console.log('Ok !' + response)).catch(response => console.log('Not ok!' + response));