const express = require('express')
const app = express();

// app.get('/', (req, res) => {
//     //send html data to the ui on home page
//     res.send('<h1>this is hello from express</h1>')

// });
// app.get('/', (req, res) => {
//     //send multiple data
//     res.write('<h1>this is hello from express</h1>');
//     res.write('this is a home page');
//     res.write(' this is a data call');
//     res.send(); //it told us all the data is read
// });


app.get('/', (req, res) => {
    //send object data
    // res.send({
    //     id: 1,
    //     name: "ajmal"
    // });

    // output show in json data : {
    //     "id": 1,
    //         "name": "ajmal"
    // }

    //i.e when obj send to ui from express.js
    //it conver it into json data

    // also we can use res.json() instead of res.send()

    res.json({
        id: 2,
        name: "prince"
    })

    //diffrence - both mwthods are identical when an object or array is passed but res.json()
    //will also convert non-objects such as null and undefined ,which are not valid json.

});

app.listen(7000, () => {
    console.log('listening port no 7000')
});