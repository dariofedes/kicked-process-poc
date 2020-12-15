const fetch = require('node-fetch');

module.exports = async function kickedProcess({ body: { user : { age }} }) {
    const array = [ 1, 2, 3, 4, 5, 6, 7 ,8, 9, 'not-a-person' ]

    const resultsArray = [ ]

    array.forEach((element) => {
        fetch(`https://swapi.dev/api/people/${element}`)
            .then(res => {
                console.log(res.status)
                return res.text()
            })
            .then(body => console.log(JSON.parse(body).name));
    })
}